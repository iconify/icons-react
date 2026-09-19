import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvwb1mbyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvwb1mbyu"/>`,
		"fallback": "iconoir:egg",
	});
}

export default Component;
