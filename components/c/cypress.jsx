import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4tv5jnvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4tv5jnvf"/>`,
		"fallback": "simple-icons:cypress",
	});
}

export default Component;
