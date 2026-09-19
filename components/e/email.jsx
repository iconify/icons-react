import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu6t8ibbw.css';

const viewBox = {"width":750,"height":750};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu6t8ibbw"/>`,
		"fallback": "il:email",
	});
}

export default Component;
