import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipcu34bmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipcu34bmo"/>`,
		"fallback": "iconoir:add-to-cart",
	});
}

export default Component;
