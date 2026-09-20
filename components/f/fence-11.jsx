import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egyn5sb-i.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egyn5sb-i"/>`,
		"fallback": "maki:fence-11",
	});
}

export default Component;
