import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq76f0bli.css';
import '../../css/k/kjglpe2ae.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq76f0bli"/><path class="kjglpe2ae"/>`,
		"fallback": "selfhst:connectwise-brightgauge-dark",
	});
}

export default Component;
