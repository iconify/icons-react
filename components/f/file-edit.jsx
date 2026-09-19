import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/r/rn274c3qm.css';
import '../../css/n/nbmak7b6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="rn274c3qm"/><path class="nbmak7b6c"/></g>`,
		"fallback": "hugeicons:file-edit",
	});
}

export default Component;
