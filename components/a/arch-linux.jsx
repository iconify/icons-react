import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0f7r1b9z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0f7r1b9z"/>`,
		"fallback": "cib:arch-linux",
	});
}

export default Component;
