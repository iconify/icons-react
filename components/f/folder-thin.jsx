import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nde3o9bjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nde3o9bjb"/>`,
		"fallback": "iconamoon:folder-thin",
	});
}

export default Component;
