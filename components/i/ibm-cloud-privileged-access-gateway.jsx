import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usifnk4ig.css';
import '../../css/b/bv734nb5x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usifnk4ig"/><path class="bv734nb5x"/>`,
		"fallback": "carbon:ibm-cloud-privileged-access-gateway",
	});
}

export default Component;
