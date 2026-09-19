import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq7_hjmyd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kq7_hjmyd"/>`,
		"fallback": "at-icons:arrow-up-left",
	});
}

export default Component;
