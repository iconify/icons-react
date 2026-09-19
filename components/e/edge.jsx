import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhon-xy1m.css';

const viewBox = {"width":1664,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhon-xy1m"/>`,
		"fallback": "fa:edge",
	});
}

export default Component;
