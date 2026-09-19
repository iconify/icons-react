import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg5z9hj3r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg5z9hj3r"/>`,
		"fallback": "fa-solid:chart-area",
	});
}

export default Component;
