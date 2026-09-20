import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp5n-8bhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vp5n-8bhx"/>`,
		"fallback": "thesvg:duplicati",
	});
}

export default Component;
