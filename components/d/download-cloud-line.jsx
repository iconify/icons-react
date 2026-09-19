import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9937jjxc.css';
import '../../css/b/b2uxm_bsm.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 m9937jjxc"/><path class="b2uxm_bsm clr-i-outline clr-i-outline-path-2"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:download-cloud-line",
	});
}

export default Component;
