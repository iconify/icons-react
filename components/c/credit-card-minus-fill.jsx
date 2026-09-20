import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yshcjbced.css';
import '../../css/x/xesiykbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yshcjbced"/><path class="xesiykbpi"/></g>`,
		"fallback": "keyline-icons:credit-card-minus-fill",
	});
}

export default Component;
