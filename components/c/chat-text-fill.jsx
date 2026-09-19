import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5u-odb8r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5u-odb8r"/>`,
		"fallback": "bi:chat-text-fill",
	});
}

export default Component;
