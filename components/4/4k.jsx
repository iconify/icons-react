import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqcxk6ebk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqcxk6ebk"/>`,
		"fallback": "andrsrxn:4k",
	});
}

export default Component;
