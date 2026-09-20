import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_c6c0bhf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_c6c0bhf"/>`,
		"fallback": "maki:circle-stroked-15",
	});
}

export default Component;
