import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tbsoarh-e.css';
import '../../css/m/md286fbip.css';
import '../../css/k/k3d60aclh.css';
import '../../css/b/b6t7n-yss.css';
import '../../css/j/jdilsabed.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="tbsoarh-e"/><g class="md286fbip"><path class="k3d60aclh"/><path class="b6t7n-yss"/><path class="jdilsabed"/></g></g>`,
		"fallback": "cryptocurrency-color:1inch",
	});
}

export default Component;
