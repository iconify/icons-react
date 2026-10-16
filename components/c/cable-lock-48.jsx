import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovlsupbow.css';
import '../../css/e/ep-e4lbdz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovlsupbow"/><path class="ep-e4lbdz"/>`,
		"fallback": "energy-icons:cable-lock-48",
	});
}

export default Component;
