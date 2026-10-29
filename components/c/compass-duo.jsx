import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oan3fnbps.css';
import '../../css/z/z1c1vtbba.css';
import '../../css/u/uesbikcft.css';
import '../../css/y/yw4fz_b6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="oan3fnbps"/><path class="wm-a z1c1vtbba"/><path class="uesbikcft wm-a"/><path class="yw4fz_b6b"/></g>`,
		"fallback": "withicons:compass-duo",
	});
}

export default Component;
