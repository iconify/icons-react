import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k5hkbv56d.css';
import '../../css/j/j8_x8iboc.css';
import '../../css/w/wer_ogb9b.css';
import '../../css/q/qiyypgbtt.css';
import '../../css/s/swv5gibmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="k5hkbv56d"/><path class="j8_x8iboc wm-a"/><path class="wer_ogb9b wm-s"/><path class="qiyypgbtt"/><path class="swv5gibmp wm-a"/></g>`,
		"fallback": "withicons:heart-gift-duo",
	});
}

export default Component;
