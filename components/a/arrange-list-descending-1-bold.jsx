import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n-jiqbc_y.css';
import '../../css/w/w1_x6n12x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="n-jiqbc_y"/><path class="w1_x6n12x"/></g>`,
		"fallback": "streamline-ultimate:arrange-list-descending-1-bold",
	});
}

export default Component;
