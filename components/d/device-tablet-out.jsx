import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fhmp2m6dp.css';
import '../../css/g/ghgjiub_t.css';
import '../../css/x/xtyg9db9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fhmp2m6dp"/><path class="ghgjiub_t"/><path class="xtyg9db9j"/></g>`,
		"fallback": "andrsrxn:device-tablet-out",
	});
}

export default Component;
