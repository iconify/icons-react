import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3-ktby_d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3-ktby_d"/>`,
		"fallback": "carbon:cursor-1",
	});
}

export default Component;
