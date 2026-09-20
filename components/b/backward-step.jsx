import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1y5f3xqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1y5f3xqy"/>`,
		"fallback": "meteor-icons:backward-step",
	});
}

export default Component;
