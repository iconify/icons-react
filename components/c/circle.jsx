import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxe6n8b2u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxe6n8b2u"/>`,
		"fallback": "rivet-icons:circle",
	});
}

export default Component;
