import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6fali1_u.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6fali1_u"/>`,
		"fallback": "f7:gauge",
	});
}

export default Component;
