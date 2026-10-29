import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/t5zj4129q.css';
import '../../css/b/bxjv56brc.css';
import '../../css/q/qnftlbnpd.css';
import '../../css/c/cw36_6mco.css';
import '../../css/j/jwyvidb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="t5zj4129q wm-deco"/><path class="bxjv56brc wm-deco"/><path class="qnftlbnpd wm-k"/><path class="cw36_6mco wm-a"/><path class="jwyvidb5f wm-k"/></g>`,
		"fallback": "withicons:chart-area-blueprint",
	});
}

export default Component;
