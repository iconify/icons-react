import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwyivikpc.css';
import '../../css/m/mdo2xzb3k.css';
import '../../css/i/ihmii9b0s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwyivikpc"/><path class="mdo2xzb3k"/><path class="ihmii9b0s"/>`,
		"fallback": "energy-icons:gas-holder-48-bold",
	});
}

export default Component;
