import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu4to9b9w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu4to9b9w"/>`,
		"fallback": "subway:duble-corner-arrow-blod-2",
	});
}

export default Component;
