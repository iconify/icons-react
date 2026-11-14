import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y7hbvqb6k.css';
import '../../css/d/dn482ty1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="y7hbvqb6k"/><path class="dn482ty1h"/></g>`,
		"fallback": "hugeicons:bookmark-block-02",
	});
}

export default Component;
