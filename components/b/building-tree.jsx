import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/klnargz1y.css';
import '../../css/f/f11k2wbcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="klnargz1y"/><path class="f11k2wbcq"/></g>`,
		"fallback": "mage:building-tree",
	});
}

export default Component;
