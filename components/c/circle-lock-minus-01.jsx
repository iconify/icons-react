import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gl9fu4b9l.css';
import '../../css/g/gc7uo_ozk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gl9fu4b9l"/><path class="gc7uo_ozk"/></g>`,
		"fallback": "hugeicons:circle-lock-minus-01",
	});
}

export default Component;
