import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zwrd6hqty.css';
import '../../css/u/uwcf-9bpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zwrd6hqty"/><path class="uwcf-9bpl"/></g>`,
		"fallback": "hugeicons:bookmark-add-02",
	});
}

export default Component;
