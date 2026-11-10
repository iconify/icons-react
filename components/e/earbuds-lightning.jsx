import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/khzy_gpyd.css';
import '../../css/e/etu1ebctc.css';
import '../../css/g/gbzyvxbya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="khzy_gpyd"/><path class="etu1ebctc"/><path class="gbzyvxbya"/></g>`,
		"fallback": "andrsrxn:earbuds-lightning",
	});
}

export default Component;
