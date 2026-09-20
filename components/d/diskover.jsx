import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n56ae_bgb.css';
import '../../css/j/jigbsmb_n.css';
import '../../css/l/l2vhs6x9m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n56ae_bgb"/><path class="jigbsmb_n"/><path class="l2vhs6x9m"/>`,
		"fallback": "selfhst:diskover",
	});
}

export default Component;
