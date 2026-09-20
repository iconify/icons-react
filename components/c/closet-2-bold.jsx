import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pzcde3i_b.css';
import '../../css/j/jgrt-yb7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pzcde3i_b"/><path class="jgrt-yb7a"/></g>`,
		"fallback": "solar:closet-2-bold",
	});
}

export default Component;
