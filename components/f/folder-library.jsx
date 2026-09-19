import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xabu7eb2u.css';
import '../../css/a/axoy5rr_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xabu7eb2u"/><path class="axoy5rr_h"/></g>`,
		"fallback": "hugeicons:folder-library",
	});
}

export default Component;
