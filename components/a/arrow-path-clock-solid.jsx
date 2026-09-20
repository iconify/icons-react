import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv_vv6bcm.css';
import '../../css/h/h0l56x3zd.css';
import '../../css/j/jno6wvb7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv_vv6bcm"><path class="h0l56x3zd"/><path class="jno6wvb7t"/></g>`,
		"fallback": "sidekickicons:arrow-path-clock-solid",
	});
}

export default Component;
