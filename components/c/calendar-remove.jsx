import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv3x2zbdk.css';

const viewBox = {"width":384,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv3x2zbdk"/>`,
		"fallback": "zmdi:calendar-remove",
	});
}

export default Component;
