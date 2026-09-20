import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uagzrrb7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uagzrrb7n"/>`,
		"fallback": "thesvg-color:abb",
	});
}

export default Component;
