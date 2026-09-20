import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3tb4dbuu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3tb4dbuu"/>`,
		"fallback": "pinhead:die-face-with-four-pips",
	});
}

export default Component;
