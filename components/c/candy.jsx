import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/r/r_2a6pb6g.css';
import '../../css/c/cgcn59-os.css';
import '../../css/h/h-2zx7tns.css';
import '../../css/x/xyo76xrmw.css';
import '../../css/o/o0hunelfk.css';
import '../../css/e/efmg97bgl.css';
import '../../css/l/lw5z3nbwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="r_2a6pb6g"/><path class="cgcn59-os"/><path class="h-2zx7tns wm-shine"/><path class="xyo76xrmw"/><path class="o0hunelfk"/><path class="efmg97bgl"/><path class="lw5z3nbwu wm-shine"/></g>`,
		"fallback": "withicons-kawaii:candy",
	});
}

export default Component;
