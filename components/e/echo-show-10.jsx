import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktpsno26x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktpsno26x"/>`,
		"fallback": "cbi:echo-show-10",
	});
}

export default Component;
