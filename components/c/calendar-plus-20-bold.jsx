import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7qx85bwi.css';
import '../../css/n/nrnabgmon.css';
import '../../css/l/lfyak8xiv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7qx85bwi"/><path class="nrnabgmon"/><path class="lfyak8xiv"/>`,
		"fallback": "energy-icons:calendar-plus-20-bold",
	});
}

export default Component;
