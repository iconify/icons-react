import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj9sbn9nr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uj9sbn9nr"/>`,
		"fallback": "noviair-light:bag-x",
	});
}

export default Component;
