import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2p4lbbrb.css';
import '../../css/q/q0z4gbkbp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2p4lbbrb"/><path class="q0z4gbkbp"/>`,
		"fallback": "energy-icons:beer-48-bold",
	});
}

export default Component;
