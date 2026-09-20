import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn2j1eees.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gn2j1eees"/>`,
		"fallback": "solar:arrow-left-linear",
	});
}

export default Component;
