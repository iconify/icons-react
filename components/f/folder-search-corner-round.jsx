import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sym8z-b3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sym8z-b3r"/>`,
		"fallback": "coolicons:folder-search-corner-round",
	});
}

export default Component;
