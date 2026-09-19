import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7d5zs9qk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7d5zs9qk"/>`,
		"fallback": "bxs:hand-down",
	});
}

export default Component;
