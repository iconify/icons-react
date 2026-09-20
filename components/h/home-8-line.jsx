import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdogm3t6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdogm3t6c"/>`,
		"fallback": "ri:home-8-line",
	});
}

export default Component;
