import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5pl09c9y.css';
import '../../css/r/rqw90ybpj.css';
import '../../css/d/d904h7a7b.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 m5pl09c9y"/><path class="clr-i-outline clr-i-outline-path-2 rqw90ybpj"/><circle class="clr-i-outline clr-i-outline-path-3 d904h7a7b"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:bubble-exclamation-line",
	});
}

export default Component;
