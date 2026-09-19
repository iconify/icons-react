import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-j7aeb6e.css';
import '../../css/o/oy2n5ob-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-j7aeb6e"/><path class="oy2n5ob-c"/>`,
		"fallback": "eos-icons:cloud-computing",
	});
}

export default Component;
