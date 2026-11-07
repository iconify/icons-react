import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_n90ytqs.css';
import '../../css/z/zwya4wbyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_n90ytqs"/><path class="zwya4wbyv"/>`,
		"fallback": "solar:folder-favorite-bookmark-bold",
	});
}

export default Component;
