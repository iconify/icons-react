import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umbz1z26x.css';

const viewBox = {"width":769,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umbz1z26x"/>`,
		"fallback": "whh:9",
	});
}

export default Component;
