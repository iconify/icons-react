import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zpw0_qknj.css';
import '../../css/v/vg1iiabee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zpw0_qknj"/><path class="vg1iiabee"/></g>`,
		"fallback": "streamline-freehand:cloud-lock-1",
	});
}

export default Component;
