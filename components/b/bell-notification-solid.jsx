import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/y/y1ufbo1la.css';
import '../../css/x/xe0pjblnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="y1ufbo1la"/><path class="xe0pjblnt"/></g>`,
		"fallback": "iconoir:bell-notification-solid",
	});
}

export default Component;
