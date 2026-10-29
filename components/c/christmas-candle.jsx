import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gyp90cb4j.css';
import '../../css/w/w2vappbii.css';
import '../../css/y/yu9sii_3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gyp90cb4j"/><path class="w2vappbii wm-a"/><path class="wm-s yu9sii_3x"/></g>`,
		"fallback": "withicons:christmas-candle",
	});
}

export default Component;
