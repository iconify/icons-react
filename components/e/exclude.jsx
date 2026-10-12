import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/ss_t9i44u.css';
import '../../css/h/h3bq2ibsx.css';
import '../../css/q/q0mlhtd6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ss_t9i44u"/><rect class="h3bq2ibsx"/><rect class="q0mlhtd6x"/></g>`,
		"fallback": "andrsrxn:exclude",
	});
}

export default Component;
