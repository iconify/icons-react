import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqv4dg9_v.css';
import '../../css/g/gxt-rhbwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqv4dg9_v"/><path class="gxt-rhbwz"/>`,
		"fallback": "circum:credit-card-off",
	});
}

export default Component;
