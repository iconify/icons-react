import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-ytb230b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-ytb230b"/>`,
		"fallback": "iconamoon:arrow-top-left-1-light",
	});
}

export default Component;
