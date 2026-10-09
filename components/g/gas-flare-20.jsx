import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljpp4jbkd.css';
import '../../css/j/jmkpn4wvl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljpp4jbkd"/><path class="jmkpn4wvl"/>`,
		"fallback": "energy-icons:gas-flare-20",
	});
}

export default Component;
