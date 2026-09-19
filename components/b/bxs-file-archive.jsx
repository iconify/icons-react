import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq8k_v7yc.css';
import '../../css/r/relvolb9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq8k_v7yc"/><path class="relvolb9u"/>`,
		"fallback": "bx:bxs-file-archive",
	});
}

export default Component;
