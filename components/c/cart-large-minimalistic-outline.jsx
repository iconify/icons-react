import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lcnw7hm5u.css';
import '../../css/r/rca2b-bti.css';
import '../../css/j/jkmhhzb3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lcnw7hm5u"/><path class="rca2b-bti"/><path class="jkmhhzb3s"/></g>`,
		"fallback": "solar:cart-large-minimalistic-outline",
	});
}

export default Component;
