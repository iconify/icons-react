import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2qhwmb-b.css';
import '../../css/n/n0-n86b2f.css';
import '../../css/p/pzrk982qd.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2qhwmb-b"/><path class="n0-n86b2f"/><path class="pzrk982qd"/>`,
		"fallback": "iwwa:help",
	});
}

export default Component;
