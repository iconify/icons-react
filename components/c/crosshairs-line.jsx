import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij2zn1-1p.css';
import '../../css/x/xfezwkenf.css';
import '../../css/j/jruix7b1s.css';
import '../../css/k/k9b500bvc.css';
import '../../css/a/adz9m6bys.css';
import '../../css/i/i9hj0wbss.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 ij2zn1-1p"/><path class="clr-i-outline clr-i-outline-path-2 xfezwkenf"/><path class="clr-i-outline clr-i-outline-path-3 jruix7b1s"/><path class="clr-i-outline clr-i-outline-path-4 k9b500bvc"/><path class="adz9m6bys clr-i-outline clr-i-outline-path-5"/><path class="clr-i-outline clr-i-outline-path-6 i9hj0wbss"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:crosshairs-line",
	});
}

export default Component;
