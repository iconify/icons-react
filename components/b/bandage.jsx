import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/y/yd_grxk2v.css';
import '../../css/q/qxttxwbsj.css';
import '../../css/x/x7oi16bmk.css';
import '../../css/c/ctw2e-brp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="yd_grxk2v"/><path class="qxttxwbsj wm-shine"/><path class="wm-k x7oi16bmk"/><path class="ctw2e-brp wm-a"/></g>`,
		"fallback": "withicons-kawaii:bandage",
	});
}

export default Component;
