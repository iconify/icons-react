import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywe4se04n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywe4se04n"/>`,
		"fallback": "thesvg-color:hackster",
	});
}

export default Component;
