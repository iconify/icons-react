import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab9e4v7oo.css';
import '../../css/w/wvyfc4bjj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab9e4v7oo"/><path clip-rule="evenodd" class="wvyfc4bjj"/>`,
		"fallback": "qlementine-icons:color-swatch-16",
	});
}

export default Component;
