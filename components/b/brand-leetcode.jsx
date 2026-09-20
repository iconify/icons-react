import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqd1kacpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqd1kacpp"/>`,
		"fallback": "tabler:brand-leetcode",
	});
}

export default Component;
