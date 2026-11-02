import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qem2vs-wc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qem2vs-wc"/>`,
		"fallback": "mingcute:album-line",
	});
}

export default Component;
