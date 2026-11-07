import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m92zv-bjj.css';
import '../../css/h/h71b5fbcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m92zv-bjj"/><path class="h71b5fbcs"/>`,
		"fallback": "solar:bell-bold",
	});
}

export default Component;
