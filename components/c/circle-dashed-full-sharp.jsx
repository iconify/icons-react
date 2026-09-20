import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fbkrm7bgj.css';
import '../../css/r/r_9ly7e1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="fbkrm7bgj"/><path class="r_9ly7e1o"/></g>`,
		"fallback": "keyline-icons:circle-dashed-full-sharp",
	});
}

export default Component;
