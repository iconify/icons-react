import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/ktu665dou.css';
import '../../css/n/nkzd8ebdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ktu665dou"/><path class="nkzd8ebdk"/></g>`,
		"fallback": "humbleicons:cog",
	});
}

export default Component;
