import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qhes2ib9h.css';
import '../../css/t/twxtpdbiq.css';
import '../../css/e/emp_42bfk.css';
import '../../css/j/jhipmccyc.css';
import '../../css/y/yi-cmfbrh.css';
import '../../css/f/f3gzs_bgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qhes2ib9h"/><path class="twxtpdbiq"/><path class="emp_42bfk"/><path class="jhipmccyc"/><path class="yi-cmfbrh"/><path class="f3gzs_bgo"/></g>`,
		"fallback": "streamline-cyber-color:clapboard-play-open",
	});
}

export default Component;
