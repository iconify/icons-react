import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3y_wdu9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3y_wdu9d"/>`,
		"fallback": "andrsrxn:arrow-down-from-line",
	});
}

export default Component;
