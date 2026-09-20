import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z0zxjzbsu.css';
import '../../css/d/dzsob3_2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z0zxjzbsu"/><path class="dzsob3_2h"/></g>`,
		"fallback": "reicon:convert-card-filled",
	});
}

export default Component;
