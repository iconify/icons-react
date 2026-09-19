import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ameq29b2m.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ameq29b2m"/>`,
		"fallback": "devicon-plain:elasticsearch-wordmark",
	});
}

export default Component;
