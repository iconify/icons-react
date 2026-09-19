import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-xzn5b1r.css';
import '../../css/w/w1cmnibmm.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 t-xzn5b1r"/><path class="clr-i-outline clr-i-outline-path-2 w1cmnibmm"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:book-line",
	});
}

export default Component;
