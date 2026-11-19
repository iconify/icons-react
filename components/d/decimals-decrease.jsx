import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oc-48gmkg.css';
import '../../css/c/cogwudb8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oc-48gmkg"/><path class="cogwudb8e"/></g>`,
		"fallback": "andrsrxn:decimals-decrease",
	});
}

export default Component;
