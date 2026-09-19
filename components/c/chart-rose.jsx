import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/ltax0actb.css';
import '../../css/c/cib29ybfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ltax0actb"/><path class="cib29ybfv"/></g>`,
		"fallback": "hugeicons:chart-rose",
	});
}

export default Component;
