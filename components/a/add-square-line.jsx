import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlub4kbyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlub4kbyg"/>`,
		"fallback": "mingcute:add-square-line",
	});
}

export default Component;
