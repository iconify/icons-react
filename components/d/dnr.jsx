import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri3dx_bzx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri3dx_bzx"/>`,
		"fallback": "cryptocurrency:dnr",
	});
}

export default Component;
