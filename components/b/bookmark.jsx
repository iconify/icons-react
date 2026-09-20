import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucfher1rk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucfher1rk"/>`,
		"fallback": "mi:bookmark",
	});
}

export default Component;
