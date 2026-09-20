import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i0flq-qyx.css';
import '../../css/v/v6s8134kp.css';
import '../../css/u/ur3jr1b6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i0flq-qyx"/><path class="v6s8134kp"/><path class="ur3jr1b6i"/></g>`,
		"fallback": "mage:bookmark-download",
	});
}

export default Component;
