import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7pmgsrcq.css';
import '../../css/a/ar62u3ixi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7pmgsrcq"/><path class="ar62u3ixi"/>`,
		"fallback": "bx:bxs-guitar-amp",
	});
}

export default Component;
