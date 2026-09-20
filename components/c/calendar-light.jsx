import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/pcbu8kb2s.css';
import '../../css/y/yl1f35bbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="pcbu8kb2s"/><path class="yl1f35bbo"/></g>`,
		"fallback": "lets-icons:calendar-light",
	});
}

export default Component;
