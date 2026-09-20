import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/haue8ibef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="haue8ibef"/>`,
		"fallback": "mdi:chili-hot-outline",
	});
}

export default Component;
