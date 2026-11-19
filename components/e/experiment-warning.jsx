import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/boqjbeb7u.css';
import '../../css/l/lj533bbjw.css';
import '../../css/e/erb1ek8cp.css';
import '../../css/x/xqvscrb-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="boqjbeb7u"/><path class="lj533bbjw"/><path class="erb1ek8cp"/><path class="xqvscrb-u"/></g>`,
		"fallback": "andrsrxn:experiment-warning",
	});
}

export default Component;
