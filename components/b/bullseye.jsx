import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybh5y4q9t.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybh5y4q9t"/>`,
		"fallback": "fluent-mdl2:bullseye",
	});
}

export default Component;
