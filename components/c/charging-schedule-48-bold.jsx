import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0rqam1_z.css';
import '../../css/q/qjd9f8_8o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0rqam1_z"/><path class="qjd9f8_8o"/>`,
		"fallback": "energy-icons:charging-schedule-48-bold",
	});
}

export default Component;
