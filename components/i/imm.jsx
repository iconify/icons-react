import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eroup8bby.css';
import '../../css/s/sqkmwdbyf.css';
import '../../css/h/hy03qtb1b.css';
import '../../css/u/uh2h54m8i.css';
import '../../css/w/wi8hi9iwd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eroup8bby"/><path clip-rule="evenodd" class="sqkmwdbyf"/><path class="hy03qtb1b"/><path clip-rule="evenodd" class="uh2h54m8i"/><path clip-rule="evenodd" class="wi8hi9iwd"/></g>`,
		"fallback": "healthicons:imm",
	});
}

export default Component;
