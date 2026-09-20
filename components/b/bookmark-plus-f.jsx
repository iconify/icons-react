import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnaw7sbyy.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnaw7sbyy"/>`,
		"fallback": "jam:bookmark-plus-f",
	});
}

export default Component;
