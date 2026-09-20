import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eu-u_113z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eu-u_113z"/>`,
		"fallback": "sidekickicons:dots-3x3-20-solid",
	});
}

export default Component;
