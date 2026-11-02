import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr19wtb2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr19wtb2p"/>`,
		"fallback": "mingcute:book-alert-line",
	});
}

export default Component;
