import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7d_wqbqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7d_wqbqz"/>`,
		"fallback": "mdi:flip-horizontal",
	});
}

export default Component;
