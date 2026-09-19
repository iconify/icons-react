import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zng09ib1c.css';
import '../../css/q/qkyarlbcy.css';
import '../../css/n/np86eoxaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zng09ib1c"/><path class="qkyarlbcy"/><path class="np86eoxaz"/></g>`,
		"fallback": "hugeicons:drag-right-04",
	});
}

export default Component;
