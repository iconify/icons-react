import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo1dt-bjs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo1dt-bjs"/>`,
		"fallback": "dashicons:align-pull-right",
	});
}

export default Component;
