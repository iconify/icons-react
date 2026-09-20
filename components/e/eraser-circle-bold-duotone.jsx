import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l80i0rb1m.css';
import '../../css/n/nctn_sb4z.css';
import '../../css/f/ffp4ckctp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l80i0rb1m"/><path class="nctn_sb4z"/><path class="ffp4ckctp"/></g>`,
		"fallback": "solar:eraser-circle-bold-duotone",
	});
}

export default Component;
