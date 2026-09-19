import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/k/kjw-vg5wy.css';
import '../../css/z/zk9l5j53a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="kjw-vg5wy"/><path class="zk9l5j53a"/></g>`,
		"fallback": "flowbite:arrow-up-down-solid",
	});
}

export default Component;
