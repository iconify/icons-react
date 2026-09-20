import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/q/qm5hnkttd.css';
import '../../css/s/s210hs_8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="qm5hnkttd"/><path class="s210hs_8w"/></g>`,
		"fallback": "reicon:cloud-cross",
	});
}

export default Component;
