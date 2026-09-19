import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm83ibnhs.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm83ibnhs"/>`,
		"fallback": "zmdi:check-circle",
	});
}

export default Component;
