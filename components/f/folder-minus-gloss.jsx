import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbl3e5bcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbl3e5bcs"/>`,
		"fallback": "withicons:folder-minus-gloss",
	});
}

export default Component;
