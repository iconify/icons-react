import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/r/r5ymwtm7v.css';
import '../../css/v/vnoc3_b_k.css';
import '../../css/m/mat8n3aim.css';
import '../../css/g/g56b45b0x.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="r5ymwtm7v"/><path class="vnoc3_b_k wm-shine"/><path class="mat8n3aim wm-k"/><path class="g56b45b0x wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:cloud-alert",
	});
}

export default Component;
