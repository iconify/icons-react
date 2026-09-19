import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoy6vkbrs.css';
import '../../css/q/qrtxhqwfd.css';
import '../../css/r/r4p2dtbwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoy6vkbrs"/><path class="qrtxhqwfd"/><path class="r4p2dtbwt"/>`,
		"fallback": "bx:images",
	});
}

export default Component;
