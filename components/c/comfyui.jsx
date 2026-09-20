import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrir-gl_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrir-gl_q"/>`,
		"fallback": "thesvg:comfyui",
	});
}

export default Component;
