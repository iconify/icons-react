import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj4kgr0on.css';
import '../../css/r/r61zubcbw.css';
import '../../css/o/obrqqsb_x.css';
import '../../css/v/vriijrbsg.css';
import '../../css/d/di65ex7cw.css';
import '../../css/y/ya_av1bii.css';
import '../../css/a/a8864jbed.css';
import '../../css/d/dhmmdwrlc.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wj4kgr0on"><path class="r61zubcbw"/><path class="obrqqsb_x"/><path class="vriijrbsg"/><path class="di65ex7cw"/><path class="ya_av1bii"/><path class="a8864jbed"/><path class="dhmmdwrlc"/></g><path class="qy525jbwx"/>`,
		"fallback": "openmoji:demigender",
	});
}

export default Component;
