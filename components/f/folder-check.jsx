import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cagf07boy.css';
import '../../css/h/ha_ukccbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cagf07boy"/><path class="ha_ukccbs"/></g>`,
		"fallback": "andrsrxn:folder-check",
	});
}

export default Component;
