import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/le33hqf6m.css';
import '../../css/w/wz94lmb_y.css';
import '../../css/o/o57o9vpnw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="le33hqf6m"/><path clip-rule="evenodd" class="wz94lmb_y"/><path class="o57o9vpnw"/></g>`,
		"fallback": "glyphs-poly:edit",
	});
}

export default Component;
