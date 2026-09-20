import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j-muby7di.css';
import '../../css/u/ugr_3qcry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="j-muby7di"/><path class="ugr_3qcry"/></g>`,
		"fallback": "streamline-freehand:crm-lead-distribution",
	});
}

export default Component;
