import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfcz5l1zg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfcz5l1zg"/>`,
		"fallback": "andrsrxn:currency",
	});
}

export default Component;
