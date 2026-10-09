import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd8a8ccdm.css';
import '../../css/x/x2-lnebmi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd8a8ccdm"/><path class="x2-lnebmi"/>`,
		"fallback": "energy-icons:hammer-48-bold",
	});
}

export default Component;
