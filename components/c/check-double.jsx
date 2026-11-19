import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nplz0_bdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nplz0_bdz"/>`,
		"fallback": "andrsrxn:check-double",
	});
}

export default Component;
