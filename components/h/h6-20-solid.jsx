import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8gfwgb1n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8gfwgb1n"/>`,
		"fallback": "sidekickicons:h6-20-solid",
	});
}

export default Component;
