import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt3wkzksv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt3wkzksv"/>`,
		"fallback": "andrsrxn:chevron-up-down",
	});
}

export default Component;
