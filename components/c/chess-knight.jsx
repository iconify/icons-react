import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezb0xt0ct.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezb0xt0ct"/>`,
		"fallback": "fa7-regular:chess-knight",
	});
}

export default Component;
