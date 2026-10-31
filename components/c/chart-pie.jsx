import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/v/v05reb1rp.css';
import '../../css/y/yolx7qcum.css';
import '../../css/g/gedrd3j4f.css';
import '../../css/q/q_5tk_bqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="v05reb1rp"/><path class="wm-shine yolx7qcum"/><path class="gedrd3j4f wm-k"/><path class="q_5tk_bqn wm-a"/></g>`,
		"fallback": "withicons-kawaii:chart-pie",
	});
}

export default Component;
