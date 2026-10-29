import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nn2sdrbun.css';
import '../../css/x/xfyuoc22x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="nn2sdrbun"/><path class="wm-a xfyuoc22x"/></g>`,
		"fallback": "withicons:battery-medium",
	});
}

export default Component;
