import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d058umb_r.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d058umb_r"/>`,
		"fallback": "topcoat:brush",
	});
}

export default Component;
