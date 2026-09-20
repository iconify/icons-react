import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcxl47p1u.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/k/kyle7dbca.css';
import '../../css/j/js3pfvnsz.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcxl47p1u"/><g class="ij2x_72vy"><path class="kyle7dbca"/><path class="js3pfvnsz"/></g>`,
		"fallback": "openmoji:giraffe",
	});
}

export default Component;
