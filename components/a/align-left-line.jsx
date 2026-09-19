import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwvwksbcx.css';
import '../../css/b/bk5oq1bpa.css';
import '../../css/j/jz6_h2bfq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 qwvwksbcx"/><path class="bk5oq1bpa clr-i-outline clr-i-outline-path-2"/><path class="clr-i-outline clr-i-outline-path-3 jz6_h2bfq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:align-left-line",
	});
}

export default Component;
