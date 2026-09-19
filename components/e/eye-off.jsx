import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng5pp8tbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng5pp8tbe"/>`,
		"fallback": "feather:eye-off",
	});
}

export default Component;
