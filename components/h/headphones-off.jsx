import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as32sbcep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as32sbcep"/>`,
		"fallback": "mdi:headphones-off",
	});
}

export default Component;
