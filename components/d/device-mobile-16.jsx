import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox2gpx_xr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox2gpx_xr"/>`,
		"fallback": "octicon:device-mobile-16",
	});
}

export default Component;
