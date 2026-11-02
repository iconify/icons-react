import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo-0lob9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo-0lob9h"/>`,
		"fallback": "mingcute:finger-love-line",
	});
}

export default Component;
