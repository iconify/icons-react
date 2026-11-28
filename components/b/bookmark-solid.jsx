import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv8x3ccsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv8x3ccsx"/>`,
		"fallback": "iconaut:bookmark-solid",
	});
}

export default Component;
