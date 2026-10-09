import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re49p_baz.css';
import '../../css/s/sxankrbtm.css';
import '../../css/k/k-uhcsbrk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re49p_baz"/><path class="sxankrbtm"/><path class="k-uhcsbrk"/>`,
		"fallback": "energy-icons:car-48-bold",
	});
}

export default Component;
