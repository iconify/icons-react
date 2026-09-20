import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/t/taf7a5bvn.css';
import '../../css/l/lr7dwlf_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="taf7a5bvn"/><path class="lr7dwlf_n"/></g>`,
		"fallback": "reicon:hospital3",
	});
}

export default Component;
