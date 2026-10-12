import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4kw_lbun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4kw_lbun"/>`,
		"fallback": "andrsrxn:arrow-start",
	});
}

export default Component;
