import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3kc6x8kr.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3kc6x8kr"/>`,
		"fallback": "garden:alt-text-fill-12",
	});
}

export default Component;
