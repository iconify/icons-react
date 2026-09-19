import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c202792cm.css';
import '../../css/e/ey8oes-9q.css';
import '../../css/j/jqys2dbeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c202792cm"/><path class="ey8oes-9q"/><path class="jqys2dbeu"/></g>`,
		"fallback": "hugeicons:charity",
	});
}

export default Component;
