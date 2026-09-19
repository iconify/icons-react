import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgj0nj_cz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgj0nj_cz"/>`,
		"fallback": "heroicons:calendar-date-range",
	});
}

export default Component;
