import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/r/r5ymwtm7v.css';
import '../../css/y/ynxc2aczu.css';
import '../../css/v/vnoc3_b_k.css';
import '../../css/m/mat8n3aim.css';
import '../../css/z/z0uu81icn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="r5ymwtm7v"/><path class="ynxc2aczu"/><path class="vnoc3_b_k wm-shine"/><path class="mat8n3aim"/><path class="z0uu81icn"/></g>`,
		"fallback": "withicons-kawaii:cloud",
	});
}

export default Component;
