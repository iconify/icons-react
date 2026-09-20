import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s74x4zxov.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s74x4zxov"/>`,
		"fallback": "la:air-freshener-solid",
	});
}

export default Component;
