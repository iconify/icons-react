import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjzmy7b4y.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjzmy7b4y"/>`,
		"fallback": "fa7-brands:confluence",
	});
}

export default Component;
