import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkl-9wbbq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkl-9wbbq"/>`,
		"fallback": "osmic:ford-14",
	});
}

export default Component;
