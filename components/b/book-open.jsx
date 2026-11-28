import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2niyf_kt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2niyf_kt"/>`,
		"fallback": "noviair-light:book-open",
	});
}

export default Component;
