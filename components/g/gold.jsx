import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zyiym8w1u.css';
import '../../css/c/cr0u2ptpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="zyiym8w1u"/><path class="cr0u2ptpx"/></g>`,
		"fallback": "hugeicons:gold",
	});
}

export default Component;
