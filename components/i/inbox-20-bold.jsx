import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfgux_bnw.css';
import '../../css/c/cnwk2jbdp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfgux_bnw"/><path class="cnwk2jbdp"/>`,
		"fallback": "energy-icons:inbox-20-bold",
	});
}

export default Component;
