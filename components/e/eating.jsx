import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utb9ql0jo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utb9ql0jo"/>`,
		"fallback": "game-icons:eating",
	});
}

export default Component;
