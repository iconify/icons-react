import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/f/f667w6b2q.css';
import '../../css/c/czwr0-f-r.css';
import '../../css/j/jmvv3kbnk.css';
import '../../css/y/yvr-duh2e.css';
import '../../css/i/i1g1qkwrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="f667w6b2q"/><path class="czwr0-f-r wm-shine"/><path class="jmvv3kbnk wm-k"/><path class="wm-a yvr-duh2e"/><path class="i1g1qkwrt wm-deco"/></g>`,
		"fallback": "withicons-kawaii:calendar-days",
	});
}

export default Component;
