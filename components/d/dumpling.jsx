import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jstsvibwd.css';
import '../../css/n/n8lapqogo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jstsvibwd"/><path class="n8lapqogo wm-a"/></g>`,
		"fallback": "withicons:dumpling",
	});
}

export default Component;
