import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dvhndkvvz.css';
import '../../css/c/cfqdeib_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dvhndkvvz"/><path class="cfqdeib_b"/></g>`,
		"fallback": "si:bar-chart-duotone",
	});
}

export default Component;
