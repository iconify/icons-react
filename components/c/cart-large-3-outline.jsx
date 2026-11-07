import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gsg1rm3ee.css';
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
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gsg1rm3ee"/><path class="rca2b-bti"/><path class="jkmhhzb3s"/></g>`,
		"fallback": "solar:cart-large-3-outline",
	});
}

export default Component;
