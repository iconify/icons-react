import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg7g0cboa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rg7g0cboa"/>`,
		"fallback": "iconamoon:folder-close-thin",
	});
}

export default Component;
