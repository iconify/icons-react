import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vs2whuh0n.css';
import '../../css/c/coovuvb-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vs2whuh0n"/><path class="coovuvb-c"/></g>`,
		"fallback": "hugeicons:accident",
	});
}

export default Component;
