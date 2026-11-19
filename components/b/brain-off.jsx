import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l4zm7herh.css';
import '../../css/b/bsn2py26e.css';
import '../../css/b/b5nwt2bha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l4zm7herh"/><path class="bsn2py26e"/><path class="b5nwt2bha"/></g>`,
		"fallback": "andrsrxn:brain-off",
	});
}

export default Component;
