import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yalmkab6b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yalmkab6b"/>`,
		"fallback": "la:candy-cane",
	});
}

export default Component;
