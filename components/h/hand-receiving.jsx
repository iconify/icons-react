import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rp203napy.css';
import '../../css/y/y4b0m0bhs.css';
import '../../css/d/dlpta8rcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="rp203napy"/><path class="y4b0m0bhs"/><rect class="dlpta8rcu"/></g>`,
		"fallback": "andrsrxn:hand-receiving",
	});
}

export default Component;
