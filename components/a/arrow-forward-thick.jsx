import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6gk9xwql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6gk9xwql"/>`,
		"fallback": "akar-icons:arrow-forward-thick",
	});
}

export default Component;
