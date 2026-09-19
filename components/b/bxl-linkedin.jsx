import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4250zhsi.css';
import '../../css/l/l8da1zbmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="f4250zhsi"/><path class="l8da1zbmd"/>`,
		"fallback": "bx:bxl-linkedin",
	});
}

export default Component;
