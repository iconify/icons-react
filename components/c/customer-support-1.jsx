import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/g/gduwnmbbp.css';
import '../../css/u/u-4i8s-1c.css';
import '../../css/q/q3k5j6b6y.css';
import '../../css/i/ik6xaoppb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="gduwnmbbp"/><path class="u-4i8s-1c"/><path class="q3k5j6b6y"/><path class="ik6xaoppb"/></g>`,
		"fallback": "streamline-sharp-color:customer-support-1",
	});
}

export default Component;
