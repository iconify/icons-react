import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usn_kpbtm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usn_kpbtm"/>`,
		"fallback": "pinhead:five",
	});
}

export default Component;
