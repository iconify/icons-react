import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/ol59wkbir.css';
import '../../css/x/x1s3trbaa.css';
import '../../css/u/upkx9_14y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ol59wkbir wm-shadow"/><path class="wm-shadow x1s3trbaa"/><path class="upkx9_14y"/></g>`,
		"fallback": "withicons-brutal:indian-rupee",
	});
}

export default Component;
