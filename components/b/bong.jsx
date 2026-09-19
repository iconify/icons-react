import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym1bg-bff.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym1bg-bff"/>`,
		"fallback": "fa7-solid:bong",
	});
}

export default Component;
