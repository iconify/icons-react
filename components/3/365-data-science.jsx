import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqg8gvnrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqg8gvnrt"/>`,
		"fallback": "thesvg-color:365-data-science",
	});
}

export default Component;
