import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/h/ht7bm3bto.css';
import '../../css/v/vpe0ue3vn.css';
import '../../css/m/mexbxv5go.css';
import '../../css/v/vnfkbvmnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ht7bm3bto"/><path class="vpe0ue3vn wm-k"/><path class="mexbxv5go wm-a"/><path class="vnfkbvmnw wm-deco"/></g>`,
		"fallback": "withicons-kawaii:fence",
	});
}

export default Component;
