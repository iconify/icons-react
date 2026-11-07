import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6twh0b_q.css';
import '../../css/h/hsyg8kbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n6twh0b_q"/><path class="hsyg8kbzj"/>`,
		"fallback": "solar:document-2-bold-duotone",
	});
}

export default Component;
