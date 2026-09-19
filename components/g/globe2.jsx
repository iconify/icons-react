import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbpxv2b0b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbpxv2b0b"/>`,
		"fallback": "bi:globe2",
	});
}

export default Component;
