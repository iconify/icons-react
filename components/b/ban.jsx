import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/i/i_mj4ebji.css';
import '../../css/k/kvwkezwtg.css';
import '../../css/e/e6pe76bxh.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/r/r4m5x7bba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="i_mj4ebji"/><path class="kvwkezwtg"/><path class="e6pe76bxh wm-shine"/><path class="wm-k yw4fz_b6b"/><path class="r4m5x7bba wm-a"/></g>`,
		"fallback": "withicons-kawaii:ban",
	});
}

export default Component;
