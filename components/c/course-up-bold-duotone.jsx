import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_q0ozs9d.css';
import '../../css/i/iddfz9biw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o_q0ozs9d"/><path class="iddfz9biw"/>`,
		"fallback": "solar:course-up-bold-duotone",
	});
}

export default Component;
