import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oq5s6vl3e.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ij3vyybgh.css';
import '../../css/w/w3i1zx0jw.css';
import '../../css/c/c7xxu7yko.css';
import '../../css/j/je--v48bx.css';
import '../../css/f/fy-5o3ueb.css';
import '../../css/j/jekb_tk-w.css';
import '../../css/z/znm-fybcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oq5s6vl3e secondary"/><g class="dt0cm9dhy primary"><path class="ij3vyybgh"/><path class="w3i1zx0jw"/><path class="c7xxu7yko"/><path class="je--v48bx"/><path class="fy-5o3ueb"/><path class="jekb_tk-w"/><path class="znm-fybcq"/></g>`,
		"fallback": "iconaut:bus-duo",
	});
}

export default Component;
