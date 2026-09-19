import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cslm94z5v.css';
import '../../css/i/is1vivbaq.css';
import '../../css/w/w1u9r841l.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 cslm94z5v"/><path class="clr-i-outline clr-i-outline-path-2 is1vivbaq"/><path class="clr-i-outline clr-i-outline-path-3 w1u9r841l"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:auto-line",
	});
}

export default Component;
