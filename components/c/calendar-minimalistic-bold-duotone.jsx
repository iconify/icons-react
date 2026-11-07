import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd465jbnq.css';
import '../../css/n/nxd-6qb4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd465jbnq"/><path class="nxd-6qb4n"/>`,
		"fallback": "solar:calendar-minimalistic-bold-duotone",
	});
}

export default Component;
