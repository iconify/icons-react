import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw7vg6b7c.css';

const viewBox = {"width":256,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw7vg6b7c"/>`,
		"fallback": "fa6-solid:caret-right",
	});
}

export default Component;
