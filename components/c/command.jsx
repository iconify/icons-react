import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p5ihpwntp.css';
import '../../css/u/uqxrzwbcr.css';
import '../../css/j/j4nx8tdec.css';
import '../../css/z/zinmk8b1z.css';
import '../../css/g/grtnotb7i.css';
import '../../css/r/r0_2w3oze.css';
import '../../css/b/b9dalsb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p5ihpwntp wm-shadow"/><path class="uqxrzwbcr"/><path class="j4nx8tdec"/><path class="zinmk8b1z"/><path class="grtnotb7i"/><path class="r0_2w3oze"/><path class="b9dalsb1f wm-shine"/></g>`,
		"fallback": "withicons-luxe:command",
	});
}

export default Component;
