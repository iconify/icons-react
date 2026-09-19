import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xn2x2mb6o.css';
import '../../css/u/ugympsbvc.css';
import '../../css/f/fbsp0npfg.css';
import '../../css/q/qd5uhvp6e.css';
import '../../css/i/i04bapast.css';
import '../../css/h/huro36bmb.css';
import '../../css/r/r5k13lb3u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xn2x2mb6o"/><path class="ugympsbvc"/><path class="fbsp0npfg"/><path class="qd5uhvp6e"/><path class="i04bapast"/><path class="huro36bmb"/><path class="r5k13lb3u"/></g>`,
		"fallback": "fluent-emoji-flat:bubble-tea",
	});
}

export default Component;
