import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/edn-7sgzg.css';
import '../../css/l/lggwddzzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="edn-7sgzg"/><path class="lggwddzzt"/></g>`,
		"fallback": "andrsrxn:border-bottom",
	});
}

export default Component;
