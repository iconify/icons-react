import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aw-y6obss.css';
import '../../css/i/irnyb8bbi.css';
import '../../css/w/wuvczemwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aw-y6obss"/><path class="irnyb8bbi"/><path clip-rule="evenodd" class="wuvczemwq"/></g>`,
		"fallback": "solar:info-circle-outline",
	});
}

export default Component;
