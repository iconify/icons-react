import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfmxfib-p.css';
import '../../css/g/go9g36_gr.css';
import '../../css/n/nodf4s9cv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfmxfib-p"/><path class="go9g36_gr"/><path class="nodf4s9cv"/>`,
		"fallback": "ion:filing",
	});
}

export default Component;
