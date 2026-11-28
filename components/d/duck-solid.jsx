import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngo_hc0bz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngo_hc0bz"/>`,
		"fallback": "iconaut:duck-solid",
	});
}

export default Component;
