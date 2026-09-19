import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvv8rja_i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvv8rja_i"/>`,
		"fallback": "carbon:constraint",
	});
}

export default Component;
