import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt7-9wjst.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt7-9wjst"/>`,
		"fallback": "rivet-icons:arrow-anchor-up-left",
	});
}

export default Component;
