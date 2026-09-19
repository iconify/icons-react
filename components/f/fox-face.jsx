import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9g07hbip.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9g07hbip"/>`,
		"fallback": "dinkie-icons:fox-face",
	});
}

export default Component;
