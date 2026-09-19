import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p5yua1bwn.css';
import '../../css/t/t5ew0tu8l.css';
import '../../css/h/hpz3uft5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p5yua1bwn"/><path class="t5ew0tu8l"/><path class="hpz3uft5e"/></g>`,
		"fallback": "hugeicons:drag-left-02",
	});
}

export default Component;
