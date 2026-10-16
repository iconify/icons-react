import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc4olvb8c.css';
import '../../css/e/el8rvydxl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc4olvb8c"/><path class="el8rvydxl"/>`,
		"fallback": "energy-icons:current-transformer-48",
	});
}

export default Component;
