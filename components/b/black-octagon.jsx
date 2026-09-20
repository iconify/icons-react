import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fea_d8t0e.css';
import '../../css/i/if3pd-1ww.css';
import '../../css/a/a6rqpnekf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fea_d8t0e"/><path class="if3pd-1ww"/><path class="a6rqpnekf"/>`,
		"fallback": "openmoji:black-octagon",
	});
}

export default Component;
