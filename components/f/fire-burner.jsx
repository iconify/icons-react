import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd-6dbc8x.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd-6dbc8x"/>`,
		"fallback": "fa7-solid:fire-burner",
	});
}

export default Component;
