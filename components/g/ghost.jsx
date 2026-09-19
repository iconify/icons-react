import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsi0siggj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsi0siggj"/>`,
		"fallback": "at-icons:ghost",
	});
}

export default Component;
