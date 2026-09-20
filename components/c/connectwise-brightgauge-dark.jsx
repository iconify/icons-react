import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2wqhl8qw.css';
import '../../css/k/kjglpe2ae.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2wqhl8qw"/><path class="kjglpe2ae"/>`,
		"fallback": "selfhst:connectwise-brightgauge-dark",
	});
}

export default Component;
