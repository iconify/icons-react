import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yj0u6uuwd.css';
import '../../css/w/wxn3fnb8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="yj0u6uuwd"/><path class="wxn3fnb8q"/></g>`,
		"fallback": "lucide:align-horizontal-space-around",
	});
}

export default Component;
