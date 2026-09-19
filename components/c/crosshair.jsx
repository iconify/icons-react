import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g8qfvnbjm.css';
import '../../css/d/d6ip8mb4m.css';
import '../../css/s/sj6rsfbex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="g8qfvnbjm"/><path class="d6ip8mb4m"/><path class="sj6rsfbex"/></g>`,
		"fallback": "hugeicons:crosshair",
	});
}

export default Component;
