import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wq7rbfb9h.css';
import '../../css/u/up4lun9xh.css';
import '../../css/s/s1r0ezbnv.css';
import '../../css/s/shte9bcuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wq7rbfb9h"/><path class="up4lun9xh wm-s"/><path class="s1r0ezbnv"/><path class="shte9bcuj wm-a"/></g>`,
		"fallback": "withicons:bell-ring-duo",
	});
}

export default Component;
