import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u136l-8rd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u136l-8rd"/>`,
		"fallback": "solar:folder-favorite-bookmark-outline",
	});
}

export default Component;
