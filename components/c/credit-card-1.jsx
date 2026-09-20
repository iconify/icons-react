import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/myw987e2z.css';
import '../../css/i/icpbwx0_p.css';
import '../../css/p/pm7x3xh2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="myw987e2z"/><path class="icpbwx0_p"/><path class="pm7x3xh2y"/></g>`,
		"fallback": "streamline-freehand:credit-card-1",
	});
}

export default Component;
