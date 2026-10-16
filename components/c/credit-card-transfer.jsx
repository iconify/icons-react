import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o2j6rdzub.css';
import '../../css/s/spw8kab4z.css';
import '../../css/b/bsquanb2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o2j6rdzub"/><path class="spw8kab4z"/><path class="bsquanb2q"/></g>`,
		"fallback": "andrsrxn:credit-card-transfer",
	});
}

export default Component;
