import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dqjf25blo.css';
import '../../css/n/nqebvpm2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dqjf25blo"/><path class="nqebvpm2l"/></g>`,
		"fallback": "hugeicons:document-validation",
	});
}

export default Component;
