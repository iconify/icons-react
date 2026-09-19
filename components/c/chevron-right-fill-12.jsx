import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0tnk7uws.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0tnk7uws"/>`,
		"fallback": "garden:chevron-right-fill-12",
	});
}

export default Component;
