import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbrp5rbqb.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbrp5rbqb"/>`,
		"fallback": "f7:cloud-sun-rain",
	});
}

export default Component;
