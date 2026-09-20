import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn9rd4djt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn9rd4djt"/>`,
		"fallback": "thesvg-color:china-eastern-airlines",
	});
}

export default Component;
