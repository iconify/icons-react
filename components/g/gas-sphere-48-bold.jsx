import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogczzsh5u.css';
import '../../css/n/nksap4bll.css';
import '../../css/i/ihmii9b0s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogczzsh5u"/><path class="nksap4bll"/><path class="ihmii9b0s"/>`,
		"fallback": "energy-icons:gas-sphere-48-bold",
	});
}

export default Component;
