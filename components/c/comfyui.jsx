import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stp-vrqms.css';
import '../../css/j/jsxbtwbof.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stp-vrqms"/><path class="jsxbtwbof"/>`,
		"fallback": "selfhst:comfyui",
	});
}

export default Component;
