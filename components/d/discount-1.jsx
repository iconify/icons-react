import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iohkho2qb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iohkho2qb"/>`,
		"fallback": "circum:discount-1",
	});
}

export default Component;
