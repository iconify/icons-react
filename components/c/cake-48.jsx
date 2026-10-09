import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl5eyibfe.css';
import '../../css/y/y7rl90rrd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl5eyibfe"/><path class="y7rl90rrd"/>`,
		"fallback": "energy-icons:cake-48",
	});
}

export default Component;
