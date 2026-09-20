import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/soio6ebds.css';
import '../../css/k/k395yab-o.css';
import '../../css/b/bu_768byw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="soio6ebds"/><path class="k395yab-o"/><path class="bu_768byw"/></g>`,
		"fallback": "streamline-color:controller-1",
	});
}

export default Component;
