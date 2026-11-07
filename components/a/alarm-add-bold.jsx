import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jcr_icbcq.css';
import '../../css/u/uo5puub8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jcr_icbcq"/><path class="uo5puub8c"/></g>`,
		"fallback": "solar:alarm-add-bold",
	});
}

export default Component;
