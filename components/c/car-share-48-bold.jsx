import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re49p_baz.css';
import '../../css/s/sxankrbtm.css';
import '../../css/e/ep-2z258c.css';
import '../../css/z/ze5uznlaj.css';
import '../../css/k/k5_rrbbac.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re49p_baz"/><path class="sxankrbtm"/><path class="ep-2z258c"/><path class="ze5uznlaj"/><path class="k5_rrbbac"/>`,
		"fallback": "energy-icons:car-share-48-bold",
	});
}

export default Component;
