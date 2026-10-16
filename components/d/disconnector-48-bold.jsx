import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uww01kbpv.css';
import '../../css/i/ifa5gsbzy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uww01kbpv"/><path class="ifa5gsbzy"/>`,
		"fallback": "energy-icons:disconnector-48-bold",
	});
}

export default Component;
