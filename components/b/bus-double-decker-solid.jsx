import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orr3tv0kz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orr3tv0kz"/>`,
		"fallback": "iconaut:bus-double-decker-solid",
	});
}

export default Component;
