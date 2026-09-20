import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r61zubcbw.css';
import '../../css/o/obrqqsb_x.css';
import '../../css/a/aq6onab-t.css';
import '../../css/d/di65ex7cw.css';
import '../../css/m/mq1huxt5g.css';
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
		"content": `<path class="r61zubcbw"/><path class="obrqqsb_x"/><path class="aq6onab-t"/><path class="di65ex7cw"/><path class="mq1huxt5g"/><path class="a8864jbed"/><path class="dhmmdwrlc"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:demigirl",
	});
}

export default Component;
