import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tbbehdu9c.css';
import '../../css/o/oc2wl_brq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="tbbehdu9c"/><path class="oc2wl_brq"/></g>`,
		"fallback": "streamline-freehand-color:email-action-image",
	});
}

export default Component;
