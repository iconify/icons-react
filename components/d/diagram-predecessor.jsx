import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0s67dbab.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0s67dbab"/>`,
		"fallback": "fa7-solid:diagram-predecessor",
	});
}

export default Component;
