import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn881uvep.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn881uvep"/>`,
		"fallback": "garden:chevron-box-fill-16",
	});
}

export default Component;
