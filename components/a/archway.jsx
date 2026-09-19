import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcf77bcal.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcf77bcal"/>`,
		"fallback": "fa7-solid:archway",
	});
}

export default Component;
