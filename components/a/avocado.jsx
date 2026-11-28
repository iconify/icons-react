import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_-0hib6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_-0hib6x"/>`,
		"fallback": "noviair-light:avocado",
	});
}

export default Component;
