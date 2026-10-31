import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/a/axwch3bnq.css';
import '../../css/m/mwusqccig.css';
import '../../css/m/mzsw-jb7t.css';
import '../../css/x/xkx55xbvx.css';
import '../../css/f/f3a3mabzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="axwch3bnq"/><path class="mwusqccig wm-shine"/><path class="mzsw-jb7t wm-k"/><path class="wm-a xkx55xbvx"/><path class="f3a3mabzp wm-deco"/></g>`,
		"fallback": "withicons-kawaii:clipboard-check",
	});
}

export default Component;
