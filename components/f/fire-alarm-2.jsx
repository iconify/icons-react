import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tj-c7hbhu.css';
import '../../css/e/es_19abui.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tj-c7hbhu"/><path class="es_19abui"/></g>`,
		"fallback": "streamline-color:fire-alarm-2",
	});
}

export default Component;
