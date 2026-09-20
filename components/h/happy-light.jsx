import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7pevhgad.css';
import '../../css/w/womdl55sm.css';
import '../../css/s/sxe-s0bwc.css';
import '../../css/j/jy4tui4pk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="m7pevhgad"/><path class="womdl55sm"/><rect class="sxe-s0bwc"/><rect class="jy4tui4pk"/></g>`,
		"fallback": "lets-icons:happy-light",
	});
}

export default Component;
