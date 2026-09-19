import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/knpt5p59u.css';
import '../../css/o/oe7093-zs.css';
import '../../css/y/y9pit_b0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="knpt5p59u"/><path class="oe7093-zs"/><path class="y9pit_b0w"/></g>`,
		"fallback": "hugeicons:gameboy",
	});
}

export default Component;
