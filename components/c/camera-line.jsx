import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz8ivg24j.css';
import '../../css/f/fj_4_cb3o.css';
import '../../css/i/ib_iefblh.css';
import '../../css/m/msikxacrd.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 qz8ivg24j"/><path class="clr-i-outline clr-i-outline-path-2 fj_4_cb3o"/><path class="clr-i-outline clr-i-outline-path-3 ib_iefblh"/><path class="clr-i-outline clr-i-outline-path-4 msikxacrd"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:camera-line",
	});
}

export default Component;
