import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyu1pxbbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyu1pxbbp"/>`,
		"fallback": "coolicons:circle-progress-three-quarter-round",
	});
}

export default Component;
