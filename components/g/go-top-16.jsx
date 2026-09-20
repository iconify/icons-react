import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znnm_ubqu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znnm_ubqu"/>`,
		"fallback": "qlementine-icons:go-top-16",
	});
}

export default Component;
