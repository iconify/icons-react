import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejow65bjs.css';
import '../../css/q/qwigwhghd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejow65bjs"/><path class="qwigwhghd"/>`,
		"fallback": "mingcute:color-picker-line",
	});
}

export default Component;
