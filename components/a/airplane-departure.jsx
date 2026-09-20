import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/e/ecxplcp0r.css';
import '../../css/m/m6yr2-byf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="ecxplcp0r"/><path class="m6yr2-byf"/></g>`,
		"fallback": "streamline-cyber:airplane-departure",
	});
}

export default Component;
