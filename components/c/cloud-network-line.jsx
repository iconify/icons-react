import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap2lbxyik.css';
import '../../css/i/i5ku0ypxp.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap2lbxyik clr-i-outline clr-i-outline-path-1"/><path class="clr-i-outline clr-i-outline-path-2 i5ku0ypxp"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:cloud-network-line",
	});
}

export default Component;
