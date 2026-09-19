import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb6uqrbzz.css';

const viewBox = {"width":1024,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb6uqrbzz"/>`,
		"fallback": "whh:euroalt",
	});
}

export default Component;
