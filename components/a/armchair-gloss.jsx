import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aubsb5bgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aubsb5bgr"/>`,
		"fallback": "withicons:armchair-gloss",
	});
}

export default Component;
