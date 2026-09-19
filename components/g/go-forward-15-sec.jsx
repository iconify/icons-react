import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z2v799ugg.css';
import '../../css/l/l9gydfb8l.css';
import '../../css/t/t2c-yabxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="z2v799ugg"/><path class="l9gydfb8l"/><path class="t2c-yabxh"/></g>`,
		"fallback": "hugeicons:go-forward-15-sec",
	});
}

export default Component;
