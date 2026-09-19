import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qf5j8vb-o.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qf5j8vb-o"/>`,
		"fallback": "fa-solid:hospital-user",
	});
}

export default Component;
