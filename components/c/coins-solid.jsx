import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulh-6-blo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulh-6-blo"/>`,
		"fallback": "iconaut:coins-solid",
	});
}

export default Component;
