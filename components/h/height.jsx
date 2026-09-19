import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub9y_mh9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ub9y_mh9p"/>`,
		"fallback": "akar-icons:height",
	});
}

export default Component;
