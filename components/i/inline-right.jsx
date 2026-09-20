import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfq67mvgm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfq67mvgm"/>`,
		"fallback": "quill:inline-right",
	});
}

export default Component;
