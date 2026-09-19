import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuf-aybsq.css';
import '../../css/s/sdkxt-e8g.css';
import '../../css/d/dx8qe1_uy.css';
import '../../css/x/x81j85bfn.css';
import '../../css/j/j0od6du1i.css';
import '../../css/f/fu-1_0bbg.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="clr-i-outline clr-i-outline-path-1 kuf-aybsq"/><circle class="clr-i-outline clr-i-outline-path-2 sdkxt-e8g"/><circle class="clr-i-outline clr-i-outline-path-3 dx8qe1_uy"/><circle class="clr-i-outline clr-i-outline-path-4 x81j85bfn"/><circle class="clr-i-outline clr-i-outline-path-5 j0od6du1i"/><circle class="clr-i-outline clr-i-outline-path-6 fu-1_0bbg"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:drag-handle-line",
	});
}

export default Component;
