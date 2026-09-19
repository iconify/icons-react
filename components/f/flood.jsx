import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbb7ehn3w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbb7ehn3w"/>`,
		"fallback": "carbon:flood",
	});
}

export default Component;
