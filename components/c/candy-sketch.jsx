import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wfo5e4vzc.css';
import '../../css/t/tnmupxbzr.css';
import '../../css/t/td21-u-yi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wfo5e4vzc"/><path class="tnmupxbzr"/><path class="td21-u-yi"/></g>`,
		"fallback": "withicons:candy-sketch",
	});
}

export default Component;
