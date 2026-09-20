import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo-li9bxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zo-li9bxz"/>`,
		"fallback": "mingcute:classify-2-ai-fill",
	});
}

export default Component;
