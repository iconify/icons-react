import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/p/p9ypwgl8j.css';
import '../../css/n/n5fs7xbcj.css';
import '../../css/j/jmvv3kbnk.css';
import '../../css/h/hp_yrebrn.css';
import '../../css/i/i1g1qkwrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="p9ypwgl8j"/><path class="n5fs7xbcj wm-shine"/><path class="jmvv3kbnk wm-k"/><path class="hp_yrebrn wm-a"/><path class="i1g1qkwrt wm-deco"/></g>`,
		"fallback": "withicons-kawaii:calendar-x",
	});
}

export default Component;
