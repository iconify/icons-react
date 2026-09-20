import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vojt6wb_p.css';
import '../../css/m/mp5ww74mr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vojt6wb_p"/><path class="mp5ww74mr"/></g>`,
		"fallback": "lets-icons:cloud-light",
	});
}

export default Component;
