import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1mcems0k.css';
import '../../css/r/rtxe8yjtm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1mcems0k"/><path class="rtxe8yjtm"/>`,
		"fallback": "energy-icons:house-thermometer-20-bold",
	});
}

export default Component;
