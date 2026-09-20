import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llm2n6bnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llm2n6bnk"/>`,
		"fallback": "mdi:book-refresh-outline",
	});
}

export default Component;
