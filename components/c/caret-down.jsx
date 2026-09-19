import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl9hx3b9i.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kl9hx3b9i"/>`,
		"fallback": "fa-solid:caret-down",
	});
}

export default Component;
