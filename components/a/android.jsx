import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfww3p6yv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfww3p6yv"/>`,
		"fallback": "la:android",
	});
}

export default Component;
