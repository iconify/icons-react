import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mdvkx-geo.css';
import '../../css/x/xarb4rskp.css';
import '../../css/s/ssdqucc2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mdvkx-geo"/><path class="xarb4rskp"/><path class="ssdqucc2z wm-a"/></g>`,
		"fallback": "withicons:avatar-panda",
	});
}

export default Component;
