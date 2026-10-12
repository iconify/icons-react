import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wng9gxbpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wng9gxbpa"/>`,
		"fallback": "andrsrxn:dot",
	});
}

export default Component;
