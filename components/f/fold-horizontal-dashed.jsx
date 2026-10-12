import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/binn1sb7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="binn1sb7w"/>`,
		"fallback": "andrsrxn:fold-horizontal-dashed",
	});
}

export default Component;
