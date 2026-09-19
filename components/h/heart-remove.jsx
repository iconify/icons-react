import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vk5tuu3mi.css';
import '../../css/g/gjdjfffgs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vk5tuu3mi"/><path class="gjdjfffgs"/></g>`,
		"fallback": "si-glyph:heart-remove",
	});
}

export default Component;
