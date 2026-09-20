import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4qhf1b5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4qhf1b5r"/>`,
		"fallback": "streamline-ultimate:android-1-bold",
	});
}

export default Component;
