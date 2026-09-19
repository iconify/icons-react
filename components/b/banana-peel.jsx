import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag19rvdld.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag19rvdld"/>`,
		"fallback": "game-icons:banana-peel",
	});
}

export default Component;
