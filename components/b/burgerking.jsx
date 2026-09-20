import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqoj9abcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqoj9abcu"/>`,
		"fallback": "simple-icons:burgerking",
	});
}

export default Component;
