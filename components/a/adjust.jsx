import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_b2heo5i.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_b2heo5i"/>`,
		"fallback": "fa:adjust",
	});
}

export default Component;
