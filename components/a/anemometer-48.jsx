import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9gapcbyd.css';
import '../../css/x/xx5tdhvbf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9gapcbyd"/><path class="xx5tdhvbf"/>`,
		"fallback": "energy-icons:anemometer-48",
	});
}

export default Component;
