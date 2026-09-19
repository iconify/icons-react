import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u60-i8alj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u60-i8alj"/>`,
		"fallback": "fa7-regular:alarm-clock",
	});
}

export default Component;
