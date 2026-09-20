import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se2jd0tlq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se2jd0tlq"/>`,
		"fallback": "pinhead:heart-outline-with-left-half-and-bottom-right-quarter",
	});
}

export default Component;
