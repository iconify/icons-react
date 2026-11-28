import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnpmc4bqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnpmc4bqj"/>`,
		"fallback": "noviair-light:gamepad-heart",
	});
}

export default Component;
