import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8bj94bkm.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8bj94bkm"/>`,
		"fallback": "f7:cloud-moon-rain",
	});
}

export default Component;
