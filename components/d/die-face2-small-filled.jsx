import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyo8u5bgh.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyo8u5bgh"/>`,
		"fallback": "dinkie-icons:die-face2-small-filled",
	});
}

export default Component;
