import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iqhz4_b-c.css';
import '../../css/t/td_x8zbbs.css';
import '../../css/v/v30b6b27l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="iqhz4_b-c"/><path class="td_x8zbbs"/><path class="v30b6b27l"/></g>`,
		"fallback": "streamline-freehand:e-commerce-add-basket-cloud",
	});
}

export default Component;
