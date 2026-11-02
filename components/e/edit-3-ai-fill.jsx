import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnhd3fn8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnhd3fn8h"/>`,
		"fallback": "mingcute:edit-3-ai-fill",
	});
}

export default Component;
