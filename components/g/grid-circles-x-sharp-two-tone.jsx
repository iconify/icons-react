import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/ztjio5yme.css';
import '../../css/h/hdcsdybnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ztjio5yme"/><path class="hdcsdybnb"/></g>`,
		"fallback": "keyline-icons:grid-circles-x-sharp-two-tone",
	});
}

export default Component;
