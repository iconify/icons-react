import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wk2cp-ech.css';
import '../../css/e/ef59tss4q.css';
import '../../css/g/gmemldbvw.css';
import '../../css/f/f2kyq5bea.css';
import '../../css/c/c-9z_d0bn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="wk2cp-ech"/><path class="ef59tss4q"/><path class="gmemldbvw"/><rect class="f2kyq5bea"/><path class="c-9z_d0bn"/></g>`,
		"fallback": "andrsrxn:device-pc-analytics",
	});
}

export default Component;
