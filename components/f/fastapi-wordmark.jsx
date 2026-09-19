import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw8ctlbtw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw8ctlbtw"/>`,
		"fallback": "devicon-plain:fastapi-wordmark",
	});
}

export default Component;
