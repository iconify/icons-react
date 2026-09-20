import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fs-irwhmz.css';
import '../../css/s/si_mtzbvj.css';
import '../../css/e/e9rq2vbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fs-irwhmz"/><path class="si_mtzbvj"/><path class="e9rq2vbat"/></g>`,
		"fallback": "solar:bookmark-square-broken",
	});
}

export default Component;
