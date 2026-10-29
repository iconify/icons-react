import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xqpnc4m6o.css';
import '../../css/g/go5n_1h8p.css';
import '../../css/g/gt3_0hbgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xqpnc4m6o"/><path class="go5n_1h8p wm-a"/><path class="gt3_0hbgl wm-s"/></g>`,
		"fallback": "withicons:battery-charging",
	});
}

export default Component;
