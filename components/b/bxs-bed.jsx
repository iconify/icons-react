import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dss77kb_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dss77kb_x"/>`,
		"fallback": "bx:bxs-bed",
	});
}

export default Component;
