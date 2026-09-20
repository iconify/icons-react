import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i0flq-qyx.css';
import '../../css/s/smjiiqbgt.css';
import '../../css/b/bviqh3beb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i0flq-qyx"/><path class="smjiiqbgt"/><path class="bviqh3beb"/></g>`,
		"fallback": "mage:bookmark-upload",
	});
}

export default Component;
