import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3x3jbc7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3x3jbc7b"/>`,
		"fallback": "noviair-light:apple-check",
	});
}

export default Component;
