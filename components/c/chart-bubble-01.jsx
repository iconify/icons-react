import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bp_mm0bva.css';
import '../../css/z/z9edi6b_u.css';
import '../../css/c/cn4jivb8s.css';
import '../../css/u/uh6-p-5cm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bp_mm0bva"/><circle class="z9edi6b_u"/><circle class="cn4jivb8s"/><circle class="uh6-p-5cm"/></g>`,
		"fallback": "hugeicons:chart-bubble-01",
	});
}

export default Component;
