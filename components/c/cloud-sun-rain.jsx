import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tt1i28l9m.css';
import '../../css/g/go148f1nh.css';
import '../../css/p/pep4eu4vt.css';
import '../../css/c/cno5lzbwt.css';
import '../../css/z/zgxp76txc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tt1i28l9m"/><path class="go148f1nh"/><path class="pep4eu4vt"/><path class="cno5lzbwt"/><path class="zgxp76txc"/></g>`,
		"fallback": "andrsrxn:cloud-sun-rain",
	});
}

export default Component;
