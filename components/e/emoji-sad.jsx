import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhc1gwbus.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhc1gwbus"/>`,
		"fallback": "entypo:emoji-sad",
	});
}

export default Component;
