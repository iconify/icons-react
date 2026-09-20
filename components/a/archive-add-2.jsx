import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h32jkxbzn.css';
import '../../css/k/kg0gpsori.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="h32jkxbzn"/><path class="kg0gpsori"/></g>`,
		"fallback": "proicons:archive-add-2",
	});
}

export default Component;
