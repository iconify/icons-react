import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w62l6ebzk.css';
import '../../css/g/gcwci4b1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w62l6ebzk"/><path class="gcwci4b1t"/></g>`,
		"fallback": "streamline-cyber-color:cursor-scroll-vertical",
	});
}

export default Component;
