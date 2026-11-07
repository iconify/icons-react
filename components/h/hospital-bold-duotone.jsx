import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqx3r_ngw.css';
import '../../css/o/o3p-r8q4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qqx3r_ngw"/><path class="o3p-r8q4o"/>`,
		"fallback": "solar:hospital-bold-duotone",
	});
}

export default Component;
