import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/e/e3jn3-obu.css';
import '../../css/h/h-w298izb.css';
import '../../css/t/t13hr5bio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="e3jn3-obu"/><path class="h-w298izb"/><path class="t13hr5bio"/></g>`,
		"fallback": "reicon:autobrightness",
	});
}

export default Component;
