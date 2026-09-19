import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr9ytkb6m.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hr9ytkb6m"/>`,
		"fallback": "fa6-solid:caret-down",
	});
}

export default Component;
