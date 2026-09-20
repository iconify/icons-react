import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzed_32fq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzed_32fq"/>`,
		"fallback": "mingcute:chat-1-line",
	});
}

export default Component;
