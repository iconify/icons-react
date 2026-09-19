import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v18c9fbau.css';
import '../../css/f/f_vjhhbhk.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v18c9fbau"/><path class="f_vjhhbhk"/>`,
		"fallback": "flag:at-4x3",
	});
}

export default Component;
