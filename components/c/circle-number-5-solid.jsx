import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vln3y5t7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vln3y5t7o"/>`,
		"fallback": "iconaut:circle-number-5-solid",
	});
}

export default Component;
