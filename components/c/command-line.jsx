import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfbaaobvg.css';
import '../../css/v/vejvu3b9p.css';
import '../../css/i/ib8p1do7v.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 yfbaaobvg"/><path class="clr-i-outline clr-i-outline-path-2 vejvu3b9p"/><path class="clr-i-outline clr-i-outline-path-3 ib8p1do7v"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:command-line",
	});
}

export default Component;
