import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq2m00b2g.css';
import '../../css/a/a6rvn_b0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq2m00b2g"/><path class="a6rvn_b0u"/>`,
		"fallback": "bx:bxs-copy-alt",
	});
}

export default Component;
