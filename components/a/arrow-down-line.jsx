import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnx-q8bwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnx-q8bwv"/>`,
		"fallback": "andrsrxn:arrow-down-line",
	});
}

export default Component;
