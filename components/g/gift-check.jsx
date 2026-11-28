import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqwtl1sfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqwtl1sfl"/>`,
		"fallback": "noviair:gift-check",
	});
}

export default Component;
