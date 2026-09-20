import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjdxl-bov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjdxl-bov"/>`,
		"fallback": "mdi:baby-buggy-off",
	});
}

export default Component;
