import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/piiyerbma.css';
import '../../css/s/su0p68bml.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="piiyerbma"/><path class="su0p68bml"/>`,
		"fallback": "energy-icons:earthquake-48",
	});
}

export default Component;
