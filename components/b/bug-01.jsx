import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mkwo76bgt.css';
import '../../css/t/t4r4iccxi.css';
import '../../css/k/kgm_pmmhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mkwo76bgt"/><path class="t4r4iccxi"/><path class="kgm_pmmhd"/></g>`,
		"fallback": "hugeicons:bug-01",
	});
}

export default Component;
