import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvs4hwxdz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvs4hwxdz"/>`,
		"fallback": "fa7-solid:heart-circle-plus",
	});
}

export default Component;
