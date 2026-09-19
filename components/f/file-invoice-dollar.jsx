import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0jn4qb1b.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0jn4qb1b"/>`,
		"fallback": "fa6-solid:file-invoice-dollar",
	});
}

export default Component;
