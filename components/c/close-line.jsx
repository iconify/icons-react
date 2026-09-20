import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex1x372fr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex1x372fr"/>`,
		"fallback": "mingcute:close-line",
	});
}

export default Component;
