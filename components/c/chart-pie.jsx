import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx8wwcc3r.css';
import '../../css/m/mb8xl_g2f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nx8wwcc3r"/><path class="mb8xl_g2f"/>`,
		"fallback": "cil:chart-pie",
	});
}

export default Component;
