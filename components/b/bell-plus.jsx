import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/reywt300r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="reywt300r"/>`,
		"fallback": "noviair:bell-plus",
	});
}

export default Component;
