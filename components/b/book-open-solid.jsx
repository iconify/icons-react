import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpq59cc4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpq59cc4o"/>`,
		"fallback": "heroicons:book-open-solid",
	});
}

export default Component;
