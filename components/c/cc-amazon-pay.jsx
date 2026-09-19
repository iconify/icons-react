import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv46qlpec.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv46qlpec"/>`,
		"fallback": "fa7-brands:cc-amazon-pay",
	});
}

export default Component;
