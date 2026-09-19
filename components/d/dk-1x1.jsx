import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7fr20m4o.css';
import '../../css/g/g6shwtddl.css';
import '../../css/q/q8u0wn3hp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7fr20m4o"/><path class="g6shwtddl"/><path class="q8u0wn3hp"/>`,
		"fallback": "flag:dk-1x1",
	});
}

export default Component;
