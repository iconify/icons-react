import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/do_u3z9om.css';
import '../../css/p/pvkzuu0au.css';
import '../../css/o/ov82defai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="do_u3z9om"/><path class="pvkzuu0au"/><path class="ov82defai"/></g>`,
		"fallback": "streamline-freehand:cloud-check",
	});
}

export default Component;
