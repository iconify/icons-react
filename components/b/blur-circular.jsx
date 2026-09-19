import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snst5v0nu.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snst5v0nu"/>`,
		"fallback": "zmdi:blur-circular",
	});
}

export default Component;
