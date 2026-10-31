import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8j3v-iti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8j3v-iti"/>`,
		"fallback": "withicons:avatar-fox-gloss",
	});
}

export default Component;
