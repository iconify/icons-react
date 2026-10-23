import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/joxdchz2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="joxdchz2l"/>`,
		"fallback": "andrsrxn:8k",
	});
}

export default Component;
