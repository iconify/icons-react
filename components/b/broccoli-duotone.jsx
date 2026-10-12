import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ysj58sbch.css';
import '../../css/t/tvimuc6hh.css';
import '../../css/d/di_j1vbhp.css';
import '../../css/j/jkzy1mcbu.css';
import '../../css/v/vhusiac6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ysj58sbch"/><path class="tvimuc6hh"/><path class="di_j1vbhp"/><path class="jkzy1mcbu"/><path class="vhusiac6m"/></g>`,
		"fallback": "lucide-extended:broccoli-duotone",
	});
}

export default Component;
