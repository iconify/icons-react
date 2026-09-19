import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ard_wpbpz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ard_wpbpz"/>`,
		"fallback": "fa7-solid:dharmachakra",
	});
}

export default Component;
