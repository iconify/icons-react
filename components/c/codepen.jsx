import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1q7olbag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1q7olbag"/>`,
		"fallback": "lineicons:codepen",
	});
}

export default Component;
