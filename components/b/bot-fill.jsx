import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t__hqab3h.css';
import '../../css/g/g0v-2xg5q.css';
import '../../css/s/sp3ujwwyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t__hqab3h"/><path class="g0v-2xg5q"/><path class="sp3ujwwyq"/></g>`,
		"fallback": "keyline-icons:bot-fill",
	});
}

export default Component;
