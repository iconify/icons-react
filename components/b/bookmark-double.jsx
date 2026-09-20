import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w8t_l-zpt.css';
import '../../css/l/ltc4adbej.css';
import '../../css/f/fr7saipmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w8t_l-zpt"/><path class="ltc4adbej"/><path class="fr7saipmm"/></g>`,
		"fallback": "tdesign:bookmark-double",
	});
}

export default Component;
