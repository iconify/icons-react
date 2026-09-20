import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bq6pbys6j.css';
import '../../css/g/gizcmhyva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bq6pbys6j"/><path class="gizcmhyva"/></g>`,
		"fallback": "si:castle-duotone",
	});
}

export default Component;
