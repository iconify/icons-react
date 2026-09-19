import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdxbmxx-r.css';
import '../../css/i/iinzih3vq.css';
import '../../css/k/knlkxdtvo.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 tdxbmxx-r"/><path class="clr-i-outline clr-i-outline-path-2 iinzih3vq"/><path class="clr-i-outline clr-i-outline-path-3 knlkxdtvo"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:box-plot-line",
	});
}

export default Component;
