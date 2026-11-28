import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqch5x_ab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqch5x_ab"/>`,
		"fallback": "noviair:book-open-heart",
	});
}

export default Component;
