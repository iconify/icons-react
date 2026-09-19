import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa-ko1b3h.css';
import '../../css/c/ch6_fcbjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa-ko1b3h"/><path class="ch6_fcbjy"/>`,
		"fallback": "bx:book-add",
	});
}

export default Component;
