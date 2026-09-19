import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qedp8ccve.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qedp8ccve"/>`,
		"fallback": "fa7-solid:building-flag",
	});
}

export default Component;
