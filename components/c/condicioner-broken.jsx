import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/ljipgdcmu.css';
import '../../css/n/n75_ldb7t.css';
import '../../css/w/w4l5de1eg.css';
import '../../css/o/ofv53rbzc.css';
import '../../css/l/linyj4b_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ljipgdcmu"/><path class="n75_ldb7t"/><path class="w4l5de1eg"/><path class="ofv53rbzc"/><path class="linyj4b_b"/></g>`,
		"fallback": "solar:condicioner-broken",
	});
}

export default Component;
