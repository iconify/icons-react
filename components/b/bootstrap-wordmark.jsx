import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxb0eifos.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxb0eifos"/>`,
		"fallback": "devicon-plain:bootstrap-wordmark",
	});
}

export default Component;
