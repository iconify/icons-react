import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy-kdob5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy-kdob5k"/>`,
		"fallback": "coolicons:helicopter-fill-round",
	});
}

export default Component;
