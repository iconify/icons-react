import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q99sspbda.css';
import '../../css/t/tayu-xb_w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q99sspbda"/><path class="tayu-xb_w"/>`,
		"fallback": "carbon:haze",
	});
}

export default Component;
