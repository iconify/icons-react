import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ek-5x4b-q.css';
import '../../css/u/up2jjobfd.css';
import '../../css/c/csl93nbwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ek-5x4b-q"/><path class="up2jjobfd"/><path class="csl93nbwb"/></g>`,
		"fallback": "streamline-ultimate:blood-bag-cross",
	});
}

export default Component;
