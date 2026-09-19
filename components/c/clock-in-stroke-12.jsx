import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccu9kxtji.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccu9kxtji"/>`,
		"fallback": "garden:clock-in-stroke-12",
	});
}

export default Component;
