import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtt60bhpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtt60bhpz"/>`,
		"fallback": "noviair:headphones-heart",
	});
}

export default Component;
