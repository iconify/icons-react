import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq1fcebhx.css';
import '../../css/d/dk1et5bqm.css';
import '../../css/l/lj4qawbsq.css';
import '../../css/c/culjwubau.css';
import '../../css/y/y3dw_8b3s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq1fcebhx"/><path class="dk1et5bqm"/><path class="lj4qawbsq"/><path class="culjwubau"/><path class="y3dw_8b3s"/>`,
		"fallback": "selfhst:bichon-dark",
	});
}

export default Component;
