import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oppzb9fsd.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oppzb9fsd"/>`,
		"fallback": "fa7-solid:chess",
	});
}

export default Component;
