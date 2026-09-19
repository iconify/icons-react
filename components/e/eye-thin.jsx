import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tl_x59b9b.css';
import '../../css/f/fo7rj5bpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="tl_x59b9b"/><path class="fo7rj5bpm"/></g>`,
		"fallback": "iconamoon:eye-thin",
	});
}

export default Component;
