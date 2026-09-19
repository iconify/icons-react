import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/px4e0xvna.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="px4e0xvna"/>`,
		"fallback": "fa:chrome",
	});
}

export default Component;
