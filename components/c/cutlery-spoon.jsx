import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/poig4bcxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="poig4bcxz"/>`,
		"fallback": "mdi:cutlery-spoon",
	});
}

export default Component;
