import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/samxp0zez.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="samxp0zez"/>`,
		"fallback": "f7:arrow-up-down-square",
	});
}

export default Component;
