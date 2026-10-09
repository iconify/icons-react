import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1mc6lwbn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1mc6lwbn"/>`,
		"fallback": "energy-icons:carbon-footprint-48",
	});
}

export default Component;
