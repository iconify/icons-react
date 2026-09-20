import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo5rrlbcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo5rrlbcb"/>`,
		"fallback": "thesvg-color:acer",
	});
}

export default Component;
