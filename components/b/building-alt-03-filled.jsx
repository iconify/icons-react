import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9j7jcc_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9j7jcc_k"/>`,
		"fallback": "griddy-icons:building-alt-03-filled",
	});
}

export default Component;
