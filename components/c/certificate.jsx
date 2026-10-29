import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x0rs3dbyl.css';
import '../../css/l/lqxba8kpa.css';
import '../../css/l/lrszm4b0g.css';
import '../../css/r/ryqpeewbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-k x0rs3dbyl"/><path class="lqxba8kpa wm-a"/><path class="lrszm4b0g"/><path class="ryqpeewbq"/></g>`,
		"fallback": "withicons-bauhaus:certificate",
	});
}

export default Component;
