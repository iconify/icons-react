import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h_kbtrb3b.css';
import '../../css/d/diuyhlbhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h_kbtrb3b"/><path class="diuyhlbhj"/></g>`,
		"fallback": "hugeicons:bitcoin-key",
	});
}

export default Component;
