import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc_a0bb1b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kc_a0bb1b"/>`,
		"fallback": "bytesize:arrow-top",
	});
}

export default Component;
