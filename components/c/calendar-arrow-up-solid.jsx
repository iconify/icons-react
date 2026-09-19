import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/m/mejvcfb8n.css';
import '../../css/t/t_n29sb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="mejvcfb8n"/><path class="t_n29sb1f"/></g>`,
		"fallback": "iconoir:calendar-arrow-up-solid",
	});
}

export default Component;
