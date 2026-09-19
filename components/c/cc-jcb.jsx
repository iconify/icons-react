import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja3dp1woh.css';

const viewBox = {"width":2304,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja3dp1woh"/>`,
		"fallback": "fa:cc-jcb",
	});
}

export default Component;
