import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikciiyj1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikciiyj1r"/>`,
		"fallback": "withicons:eye-solid",
	});
}

export default Component;
