import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/p/p9ypwgl8j.css';
import '../../css/r/rcorzpbks.css';
import '../../css/j/jmvv3kbnk.css';
import '../../css/v/vicig4bhy.css';
import '../../css/i/i1g1qkwrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="p9ypwgl8j"/><path class="rcorzpbks wm-shine"/><path class="jmvv3kbnk wm-k"/><path class="vicig4bhy wm-a"/><path class="i1g1qkwrt wm-deco"/></g>`,
		"fallback": "withicons-kawaii:calendar-minus",
	});
}

export default Component;
