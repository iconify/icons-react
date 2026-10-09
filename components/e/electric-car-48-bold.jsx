import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re49p_baz.css';
import '../../css/s/sxankrbtm.css';
import '../../css/u/up5n2bcfp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re49p_baz"/><path class="sxankrbtm"/><path class="up5n2bcfp"/>`,
		"fallback": "energy-icons:electric-car-48-bold",
	});
}

export default Component;
