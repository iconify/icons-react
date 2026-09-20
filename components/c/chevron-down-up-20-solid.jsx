import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vybyybb4z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vybyybb4z"/>`,
		"fallback": "sidekickicons:chevron-down-up-20-solid",
	});
}

export default Component;
