import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lslb_f9id.css';
import '../../css/q/qy1ni-bgs.css';
import '../../css/v/v20_eu2nd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="lslb_f9id wm-k"/><path class="qy1ni-bgs wm-a"/><path class="v20_eu2nd wm-k"/></g>`,
		"fallback": "withicons-bauhaus:chart-donut",
	});
}

export default Component;
