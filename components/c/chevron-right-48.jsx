import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax49_hbeg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax49_hbeg"/>`,
		"fallback": "energy-icons:chevron-right-48",
	});
}

export default Component;
