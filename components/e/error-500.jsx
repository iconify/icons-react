import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynyd5qxmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynyd5qxmu"/>`,
		"fallback": "andrsrxn:error-500",
	});
}

export default Component;
