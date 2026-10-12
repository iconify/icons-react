import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g99mf4bcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g99mf4bcd"/>`,
		"fallback": "andrsrxn:cos",
	});
}

export default Component;
