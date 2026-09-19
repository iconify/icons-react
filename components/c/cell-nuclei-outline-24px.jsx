import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ujnmrgbfw.css';
import '../../css/h/huar3gjey.css';
import '../../css/q/q8diyxbms.css';
import '../../css/k/kxoro6bup.css';
import '../../css/r/ro--2acxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ujnmrgbfw"/><path clip-rule="evenodd" class="huar3gjey"/><path class="q8diyxbms"/><path clip-rule="evenodd" class="kxoro6bup"/><path clip-rule="evenodd" class="ro--2acxc"/></g>`,
		"fallback": "healthicons:cell-nuclei-outline-24px",
	});
}

export default Component;
