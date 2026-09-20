import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/e/e9rq2vbat.css';
import '../../css/f/fs-irwhmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="e9rq2vbat"/><path class="fs-irwhmz"/></g>`,
		"fallback": "solar:bookmark-square-linear",
	});
}

export default Component;
