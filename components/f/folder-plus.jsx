import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/c/cuv4fybwq.css';
import '../../css/q/q_j2px_7c.css';
import '../../css/s/sxeotoblf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="cuv4fybwq"/><path class="q_j2px_7c"/><path class="sxeotoblf"/></g>`,
		"fallback": "matita:folder-plus",
	});
}

export default Component;
