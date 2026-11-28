import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsq26gb3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsq26gb3p"/>`,
		"fallback": "noviair-light:bookmark-star",
	});
}

export default Component;
