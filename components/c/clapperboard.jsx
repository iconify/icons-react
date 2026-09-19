import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd9e6acip.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd9e6acip"/>`,
		"fallback": "at-icons:clapperboard",
	});
}

export default Component;
