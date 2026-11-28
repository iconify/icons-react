import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh98s4b-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uh98s4b-o"/>`,
		"fallback": "noviair-light:chevron-circle-down",
	});
}

export default Component;
