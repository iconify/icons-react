import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wh2onkwsw.css';
import '../../css/j/jb--wo5yd.css';
import '../../css/d/dhk2nbc2r.css';
import '../../css/z/zs7twcstk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wh2onkwsw"/><path clip-rule="evenodd" class="jb--wo5yd"/><path class="dhk2nbc2r"/><path clip-rule="evenodd" class="zs7twcstk"/></g>`,
		"fallback": "healthicons:cell-nuclei",
	});
}

export default Component;
