import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6k-pbc_r.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6k-pbc_r"/>`,
		"fallback": "fa6-solid:hands-holding-circle",
	});
}

export default Component;
