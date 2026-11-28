import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxm8t9inl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxm8t9inl"/>`,
		"fallback": "noviair-light:clock-check",
	});
}

export default Component;
