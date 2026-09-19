import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdxbmxx-r.css';
import '../../css/f/fvlx95mhf.css';
import '../../css/f/fwqnodhwv.css';
import '../../css/q/qz9_vybvb.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 tdxbmxx-r"/><path class="clr-i-outline clr-i-outline-path-2 fvlx95mhf"/><path class="clr-i-outline clr-i-outline-path-3 fwqnodhwv"/><path class="clr-i-outline clr-i-outline-path-4 qz9_vybvb"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:bubble-chart-line",
	});
}

export default Component;
