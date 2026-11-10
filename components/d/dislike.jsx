import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/is_-aacio.css';
import '../../css/z/zz5uu2bsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="is_-aacio"/><path class="zz5uu2bsa"/></g>`,
		"fallback": "andrsrxn:dislike",
	});
}

export default Component;
