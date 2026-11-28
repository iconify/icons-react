import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/preos7pch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="preos7pch"/>`,
		"fallback": "noviair:folder-play",
	});
}

export default Component;
