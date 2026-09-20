import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/r/r4gykdblm.css';
import '../../css/x/xr-opxs3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="r4gykdblm"/><path class="xr-opxs3n"/></g>`,
		"fallback": "reicon:bluetooth-rectangle",
	});
}

export default Component;
