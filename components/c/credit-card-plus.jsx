import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w93ba07rq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w93ba07rq"/>`,
		"fallback": "noviair-light:credit-card-plus",
	});
}

export default Component;
