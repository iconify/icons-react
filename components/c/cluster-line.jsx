import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n35ndsbec.css';
import '../../css/c/cuqht7spy.css';
import '../../css/u/ufjnasr5o.css';
import '../../css/z/z6cj6obfc.css';
import '../../css/w/wzgk5vbjr.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 n35ndsbec"/><path class="clr-i-outline clr-i-outline-path-2 cuqht7spy"/><ellipse class="clr-i-outline clr-i-outline-path-3 ufjnasr5o"/><path class="clr-i-outline clr-i-outline-path-4 z6cj6obfc"/><path class="clr-i-outline clr-i-outline-path-5 wzgk5vbjr"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:cluster-line",
	});
}

export default Component;
