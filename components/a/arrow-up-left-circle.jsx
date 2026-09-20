import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l3i8q-r3k.css';
import '../../css/d/dwlwfdcfr.css';
import '../../css/n/n5pc76bja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l3i8q-r3k"/><path class="dwlwfdcfr"/><path class="n5pc76bja"/></g>`,
		"fallback": "mage:arrow-up-left-circle",
	});
}

export default Component;
