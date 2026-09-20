import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x82pj6-1i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x82pj6-1i"/>`,
		"fallback": "pinhead:comedy-mask",
	});
}

export default Component;
