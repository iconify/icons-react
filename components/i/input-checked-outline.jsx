import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/augh1ex2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="augh1ex2h"/>`,
		"fallback": "typcn:input-checked-outline",
	});
}

export default Component;
