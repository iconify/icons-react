import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex2baqp8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ex2baqp8j"/>`,
		"fallback": "mingcute:currency-euro-fill",
	});
}

export default Component;
