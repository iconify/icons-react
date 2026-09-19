import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s1ix8bc-p.css';
import '../../css/l/l2rha1uzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="s1ix8bc-p"/><path class="l2rha1uzx"/></g>`,
		"fallback": "hugeicons:call-blocked-02",
	});
}

export default Component;
