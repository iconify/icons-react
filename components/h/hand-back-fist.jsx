import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3rsx1buz.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3rsx1buz"/>`,
		"fallback": "fa6-regular:hand-back-fist",
	});
}

export default Component;
