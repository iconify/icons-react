import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qiyypgbtt.css';
import '../../css/s/swv5gibmp.css';
import '../../css/w/wer_ogb9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qiyypgbtt"/><path class="swv5gibmp wm-a"/><path class="wer_ogb9b wm-s"/></g>`,
		"fallback": "withicons:heart-gift",
	});
}

export default Component;
