import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xoi8enb4l.css';
import '../../css/y/ymrd-9vad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xoi8enb4l"/><path class="ymrd-9vad"/></g>`,
		"fallback": "solar:crop-minimalistic-line-duotone",
	});
}

export default Component;
