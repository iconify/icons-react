import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud354hdiy.css';
import '../../css/f/fdn9dkb1w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud354hdiy"/><path class="fdn9dkb1w"/>`,
		"fallback": "energy-icons:brain-20-bold",
	});
}

export default Component;
