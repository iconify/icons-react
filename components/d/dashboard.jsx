import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jqkjdpbqp.css';
import '../../css/d/dudpnibai.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jqkjdpbqp"/><path class="dudpnibai"/></g>`,
		"fallback": "ix:dashboard",
	});
}

export default Component;
