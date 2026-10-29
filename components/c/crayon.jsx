import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/psuc-s3be.css';
import '../../css/w/wlb0b7siw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="psuc-s3be"/><path class="wlb0b7siw wm-a"/></g>`,
		"fallback": "withicons:crayon",
	});
}

export default Component;
