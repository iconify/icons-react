import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g44e95y1y.css';
import '../../css/s/szir37fgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g44e95y1y"/><path class="szir37fgv"/></g>`,
		"fallback": "hugeicons:folder-cloud",
	});
}

export default Component;
