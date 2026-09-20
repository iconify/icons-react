import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/w/wxc64v7_t.css';
import '../../css/e/eqo8hz7-h.css';
import '../../css/q/qwx3zhbcs.css';
import '../../css/w/wj56j82bm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="wxc64v7_t"/><path class="eqo8hz7-h"/><path class="qwx3zhbcs"/><path class="wj56j82bm"/></g>`,
		"fallback": "streamline-flex:champagne-party-alcohol",
	});
}

export default Component;
