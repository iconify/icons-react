import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hchve7bvx.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hchve7bvx"/>`,
		"fallback": "f7:capslock",
	});
}

export default Component;
