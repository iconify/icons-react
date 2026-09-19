import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra9j6gbba.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra9j6gbba"/>`,
		"fallback": "fluent-mdl2:all-currency",
	});
}

export default Component;
