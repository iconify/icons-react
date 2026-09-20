import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmm9cxber.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmm9cxber"/>`,
		"fallback": "octicon:arrow-right-16",
	});
}

export default Component;
