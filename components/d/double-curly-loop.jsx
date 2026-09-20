import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a64e_yb6y.css';
import '../../css/u/uygqtsbxn.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a64e_yb6y"/><path class="uygqtsbxn"/>`,
		"fallback": "openmoji:double-curly-loop",
	});
}

export default Component;
