import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kj_y7hnaq.css';
import '../../css/p/prwrzwb3e.css';
import '../../css/w/w_5trfb0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="kj_y7hnaq"/><path class="prwrzwb3e"/><path class="w_5trfb0g"/></g>`,
		"fallback": "streamline-freehand:e-commerce-click-buy",
	});
}

export default Component;
