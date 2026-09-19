import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax7zwolhm.css';
import '../../css/y/y-j7aeb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax7zwolhm"/><path class="y-j7aeb6e"/>`,
		"fallback": "eos-icons:cloud-computing-outlined",
	});
}

export default Component;
