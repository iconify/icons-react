import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_2xuvbiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_2xuvbiq"/>`,
		"fallback": "mingcute:book-4-fill",
	});
}

export default Component;
