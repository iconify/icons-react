import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzfj7k4kr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzfj7k4kr"/>`,
		"fallback": "cbi:echo-plus",
	});
}

export default Component;
