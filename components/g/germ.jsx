import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w93hj8b3t.css';
import '../../css/p/px5xiwqdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w93hj8b3t"/><circle class="px5xiwqdn"/></g>`,
		"fallback": "lucide:germ",
	});
}

export default Component;
