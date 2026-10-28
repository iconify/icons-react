import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p-c_01ebu.css';
import '../../css/j/j-zy9pktq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p-c_01ebu"/><path class="j-zy9pktq"/></g>`,
		"fallback": "lucide:calendar-arrow-left",
	});
}

export default Component;
