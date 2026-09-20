import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_-r47b4r.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_-r47b4r"/>`,
		"fallback": "jam:chevrons-square-down",
	});
}

export default Component;
