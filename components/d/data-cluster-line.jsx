import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd0bncbmo.css';
import '../../css/z/zcfdmshpr.css';
import '../../css/y/yon6j8aod.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 kd0bncbmo"/><path class="clr-i-outline clr-i-outline-path-2 zcfdmshpr"/><path class="clr-i-outline clr-i-outline-path-3 yon6j8aod"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:data-cluster-line",
	});
}

export default Component;
