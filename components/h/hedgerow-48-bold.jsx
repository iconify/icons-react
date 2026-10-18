import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y83ielkqr.css';
import '../../css/y/y-605nsjq.css';
import '../../css/i/ihmii9b0s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y83ielkqr"/><path class="y-605nsjq"/><path class="ihmii9b0s"/>`,
		"fallback": "energy-icons:hedgerow-48-bold",
	});
}

export default Component;
