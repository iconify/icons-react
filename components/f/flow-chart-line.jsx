import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw8yjoqzh.css';
import '../../css/q/qjfrv1_4u.css';
import '../../css/h/hch8yvbvc.css';
import '../../css/l/lg_9hbc2k.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 dw8yjoqzh"/><path class="clr-i-outline clr-i-outline-path-2 qjfrv1_4u"/><path class="clr-i-outline clr-i-outline-path-3 hch8yvbvc"/><path class="clr-i-outline clr-i-outline-path-4 lg_9hbc2k"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:flow-chart-line",
	});
}

export default Component;
