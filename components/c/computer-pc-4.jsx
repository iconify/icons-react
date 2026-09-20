import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/e/e93g5db7v.css';
import '../../css/d/dmixchb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="e93g5db7v"/><path class="dmixchb_y"/></g>`,
		"fallback": "streamline-cyber:computer-pc-4",
	});
}

export default Component;
