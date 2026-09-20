import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh5vy0b8h.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh5vy0b8h"/>`,
		"fallback": "picon:checked",
	});
}

export default Component;
