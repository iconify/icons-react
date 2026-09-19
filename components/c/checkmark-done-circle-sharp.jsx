import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqwwxb7uo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqwwxb7uo"/>`,
		"fallback": "ion:checkmark-done-circle-sharp",
	});
}

export default Component;
