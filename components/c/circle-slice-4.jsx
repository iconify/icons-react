import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8qn1hb1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8qn1hb1y"/>`,
		"fallback": "mdi:circle-slice-4",
	});
}

export default Component;
