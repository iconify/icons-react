import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jbjn8-bln.css';
import '../../css/m/m-en5fc_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jbjn8-bln"/><path class="m-en5fc_i"/></g>`,
		"fallback": "basil:battery-low-outline",
	});
}

export default Component;
