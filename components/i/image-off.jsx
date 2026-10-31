import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/i58bp5-ij.css';
import '../../css/b/bka9enboo.css';
import '../../css/o/ow42osrqo.css';
import '../../css/g/gvzshsp7q.css';
import '../../css/q/qn6rjkb2i.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="i58bp5-ij wm-shadow"/><path class="bka9enboo wm-shadow"/><path class="ow42osrqo"/><path class="gvzshsp7q"/><path class="qn6rjkb2i"/><path class="vvx5zcbvx wm-s"/></g>`,
		"fallback": "withicons-brutal:image-off",
	});
}

export default Component;
