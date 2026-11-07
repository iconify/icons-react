import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1mqiebea.css';
import '../../css/b/bqmrjvvdk.css';
import '../../css/x/xggr4mj5e.css';
import '../../css/n/npq7lzc7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1mqiebea"/><path class="bqmrjvvdk"/><path class="xggr4mj5e"/><path class="npq7lzc7d"/>`,
		"fallback": "solar:cart-large-minimalistic-bold-duotone",
	});
}

export default Component;
