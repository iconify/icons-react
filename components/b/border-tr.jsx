import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulu__1bin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulu__1bin"/>`,
		"fallback": "iconoir:border-tr",
	});
}

export default Component;
