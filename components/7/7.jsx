import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n520rw5zl.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n520rw5zl"/>`,
		"fallback": "fa6-solid:7",
	});
}

export default Component;
