import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pghvay39r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pghvay39r"/>`,
		"fallback": "streamline-block:content-heart",
	});
}

export default Component;
