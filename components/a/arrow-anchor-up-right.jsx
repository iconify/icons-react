import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbd_-abaf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbd_-abaf"/>`,
		"fallback": "rivet-icons:arrow-anchor-up-right",
	});
}

export default Component;
