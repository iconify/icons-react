import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lfddx0u7v.css';
import '../../css/i/i9rgmobgb.css';
import '../../css/h/hooc3vbcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lfddx0u7v"/><path class="i9rgmobgb wm-a"/><path class="hooc3vbcx"/></g>`,
		"fallback": "withicons:badge-alert-duo",
	});
}

export default Component;
