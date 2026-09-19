import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs2qkn-bz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs2qkn-bz"/>`,
		"fallback": "heroicons-outline:chart-bar-square",
	});
}

export default Component;
