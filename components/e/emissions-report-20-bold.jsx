import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny-w6qbwa.css';
import '../../css/p/pv7m710be.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny-w6qbwa"/><path class="pv7m710be"/>`,
		"fallback": "energy-icons:emissions-report-20-bold",
	});
}

export default Component;
