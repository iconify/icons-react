import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/izs30ivpz.css';
import '../../css/c/cmpr1415r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="izs30ivpz"/><path class="cmpr1415r"/></g>`,
		"fallback": "coolicons:file-plus-corner-duotone-round",
	});
}

export default Component;
