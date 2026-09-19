import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trhuiyb4d.css';
import '../../css/j/j_4gibdnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trhuiyb4d"/><path class="j_4gibdnf"/>`,
		"fallback": "bxs:edit",
	});
}

export default Component;
