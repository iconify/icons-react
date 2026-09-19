import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mx2w4zb8i.css';

const viewBox = {"width":1024,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mx2w4zb8i"/>`,
		"fallback": "fa:gbp",
	});
}

export default Component;
