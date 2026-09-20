import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gex0890uz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gex0890uz"/>`,
		"fallback": "simple-icons:hoppscotch",
	});
}

export default Component;
