import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0bv6ac3r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0bv6ac3r"/>`,
		"fallback": "icomoon-free:download2",
	});
}

export default Component;
