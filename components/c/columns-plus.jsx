import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdfx0ab_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdfx0ab_w"/>`,
		"fallback": "noviair-light:columns-plus",
	});
}

export default Component;
