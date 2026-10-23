import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npz8czb7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npz8czb7h"/>`,
		"fallback": "andrsrxn:brackets-x",
	});
}

export default Component;
