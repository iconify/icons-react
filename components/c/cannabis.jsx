import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7xcgj6mx.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7xcgj6mx"/>`,
		"fallback": "fa7-solid:cannabis",
	});
}

export default Component;
