import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7f4-c_ic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7f4-c_ic"/>`,
		"fallback": "andrsrxn:arrows-diagonal-right",
	});
}

export default Component;
