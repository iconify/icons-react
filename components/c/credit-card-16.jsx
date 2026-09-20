import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrx6ypb5o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrx6ypb5o"/>`,
		"fallback": "qlementine-icons:credit-card-16",
	});
}

export default Component;
