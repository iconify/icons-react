import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxr4rcbqb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxr4rcbqb"/>`,
		"fallback": "la:angle-up-solid",
	});
}

export default Component;
