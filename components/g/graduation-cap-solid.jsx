import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pmzs-j52t.css';
import '../../css/o/oci9l1b-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pmzs-j52t"/><path class="oci9l1b-j"/></g>`,
		"fallback": "flowbite:graduation-cap-solid",
	});
}

export default Component;
