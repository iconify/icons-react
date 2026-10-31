import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/yn5hsstgm.css';
import '../../css/u/uxzalpldh.css';
import '../../css/h/heu5j0_nm.css';
import '../../css/q/qwx26pbpx.css';
import '../../css/u/u_o79h-mp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow yn5hsstgm"/><path class="uxzalpldh wm-shadow"/><path class="heu5j0_nm"/><path class="qwx26pbpx"/><path class="u_o79h-mp"/></g>`,
		"fallback": "withicons-brutal:candy-bucket",
	});
}

export default Component;
