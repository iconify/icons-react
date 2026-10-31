import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w61v8s2md.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w61v8s2md"/>`,
		"fallback": "withicons:droplets-gloss",
	});
}

export default Component;
