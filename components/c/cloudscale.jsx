import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhb_aqb7p.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhb_aqb7p"/>`,
		"fallback": "fa-brands:cloudscale",
	});
}

export default Component;
