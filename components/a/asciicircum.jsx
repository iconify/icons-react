import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4mkgjboz.css';

const viewBox = {"width":541,"height":730};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4mkgjboz"/>`,
		"fallback": "ls:asciicircum",
	});
}

export default Component;
