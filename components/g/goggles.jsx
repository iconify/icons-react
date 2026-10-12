import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k296prbbn.css';
import '../../css/z/zfl25ip5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k296prbbn"/><path class="zfl25ip5g"/></g>`,
		"fallback": "andrsrxn:goggles",
	});
}

export default Component;
