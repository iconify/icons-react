import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/owx3kbb2g.css';
import '../../css/v/v3nqf8b6y.css';
import '../../css/l/l7y-p8b_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="owx3kbb2g"/><path class="v3nqf8b6y"/><path class="l7y-p8b_p"/></g>`,
		"fallback": "hugeicons:conference",
	});
}

export default Component;
