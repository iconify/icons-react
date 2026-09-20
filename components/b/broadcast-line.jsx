import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/deptac1_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="deptac1_x"/>`,
		"fallback": "ri:broadcast-line",
	});
}

export default Component;
