import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q5zmjfbni.css';
import '../../css/c/co9usxqng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q5zmjfbni"/><path class="co9usxqng"/></g>`,
		"fallback": "lucide-lab:candlestick-big-lit",
	});
}

export default Component;
