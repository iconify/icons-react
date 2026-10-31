import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm27l8nmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm27l8nmm"/>`,
		"fallback": "withicons:arrow-up-gloss",
	});
}

export default Component;
