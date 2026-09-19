import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/par19ibbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="par19ibbe"/>`,
		"fallback": "iconamoon:arrow-right-1-bold",
	});
}

export default Component;
