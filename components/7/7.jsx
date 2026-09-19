import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxtu_6byx.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxtu_6byx"/>`,
		"fallback": "fa7-solid:7",
	});
}

export default Component;
