import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_4r47cdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_4r47cdi"/>`,
		"fallback": "withicons:align-left-gloss",
	});
}

export default Component;
