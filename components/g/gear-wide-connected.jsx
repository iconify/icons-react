import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0coq4_wb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0coq4_wb"/>`,
		"fallback": "bi:gear-wide-connected",
	});
}

export default Component;
