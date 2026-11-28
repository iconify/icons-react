import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmg5gpb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmg5gpb5k"/>`,
		"fallback": "noviair:coffee-heart",
	});
}

export default Component;
