import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7bd_m0le.css';
import '../../css/d/dg4ly5vpz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a7bd_m0le"/><path clip-rule="evenodd" class="dg4ly5vpz"/>`,
		"fallback": "qlementine-icons:chevron-double-right-16",
	});
}

export default Component;
