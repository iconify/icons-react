import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0dc-4v8o.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0dc-4v8o"/>`,
		"fallback": "el:backward",
	});
}

export default Component;
