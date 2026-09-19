import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/cji-2hb0s.css';
import '../../css/k/kf2g299sz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="cji-2hb0s"/><path class="kf2g299sz"/></g>`,
		"fallback": "humbleicons:eye",
	});
}

export default Component;
