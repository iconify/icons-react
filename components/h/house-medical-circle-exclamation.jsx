import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls34a7bxk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls34a7bxk"/>`,
		"fallback": "fa7-solid:house-medical-circle-exclamation",
	});
}

export default Component;
