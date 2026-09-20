import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxm448b6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kxm448b6h"/>`,
		"fallback": "mingcute:exit-fill",
	});
}

export default Component;
