import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrctc3yce.css';
import '../../css/o/ow7qimb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hrctc3yce"/><path class="ow7qimb4d"/>`,
		"fallback": "solar:cloud-storm-bold",
	});
}

export default Component;
