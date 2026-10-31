import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/i/iww45wbpv.css';
import '../../css/t/t8sucxblu.css';
import '../../css/q/qcu30kbmv.css';
import '../../css/j/jmvv3kbnk.css';
import '../../css/i/i2a-c6bbv.css';
import '../../css/i/i1g1qkwrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="iww45wbpv"/><path class="t8sucxblu"/><path class="qcu30kbmv wm-shine"/><path class="jmvv3kbnk wm-k"/><path class="i2a-c6bbv wm-a"/><path class="i1g1qkwrt wm-deco"/></g>`,
		"fallback": "withicons-kawaii:calendar-heart",
	});
}

export default Component;
