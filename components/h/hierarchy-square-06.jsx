import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/ne5l6bbkh.css';
import '../../css/t/tcqel-bfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ne5l6bbkh"/><path class="tcqel-bfd"/></g>`,
		"fallback": "hugeicons:hierarchy-square-06",
	});
}

export default Component;
