import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2-euybts.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2-euybts"/>`,
		"fallback": "cryptocurrency:chat",
	});
}

export default Component;
