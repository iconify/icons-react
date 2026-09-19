import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_6u2mhvb.css';
import '../../css/q/qm-3n6bvl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_6u2mhvb"/><path class="qm-3n6bvl"/>`,
		"fallback": "ion:golf",
	});
}

export default Component;
