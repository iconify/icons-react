import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-0q-6bvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-0q-6bvf"/>`,
		"fallback": "uil:cloud-sun-rain-alt",
	});
}

export default Component;
