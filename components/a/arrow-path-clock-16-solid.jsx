import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv_vv6bcm.css';
import '../../css/r/r_8zsvb4v.css';
import '../../css/n/ncs7ab22i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv_vv6bcm"><path class="r_8zsvb4v"/><path class="ncs7ab22i"/></g>`,
		"fallback": "sidekickicons:arrow-path-clock-16-solid",
	});
}

export default Component;
