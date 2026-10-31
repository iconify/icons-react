import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kavc_qehn.css';
import '../../css/m/mp5kwq3-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="kavc_qehn"/><path class="mp5kwq3-b wm-deco"/></g>`,
		"fallback": "withicons-kawaii:check",
	});
}

export default Component;
