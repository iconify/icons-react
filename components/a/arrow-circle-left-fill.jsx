import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z67eqnb0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z67eqnb0d"/>`,
		"fallback": "eva:arrow-circle-left-fill",
	});
}

export default Component;
