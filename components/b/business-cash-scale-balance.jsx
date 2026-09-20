import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gnvvaxb6j.css';
import '../../css/z/zhhen372l.css';
import '../../css/l/lw8dc180n.css';
import '../../css/j/jl444bf4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gnvvaxb6j"/><path class="zhhen372l"/><path class="lw8dc180n"/><path class="jl444bf4o"/></g>`,
		"fallback": "streamline-freehand:business-cash-scale-balance",
	});
}

export default Component;
