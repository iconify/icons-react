import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udl_u4bup.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udl_u4bup"/>`,
		"fallback": "system-uicons:bluetooth",
	});
}

export default Component;
