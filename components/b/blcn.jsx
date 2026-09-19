import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb93fv_4s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xb93fv_4s"/>`,
		"fallback": "cryptocurrency:blcn",
	});
}

export default Component;
