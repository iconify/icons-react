import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i4d-utb-k.css';
import '../../css/v/vfu_14b9n.css';
import '../../css/z/zf1rafb_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="i4d-utb-k"/><path class="vfu_14b9n"/><path class="zf1rafb_d"/></g>`,
		"fallback": "streamline-freehand-color:charging-flash-wireless",
	});
}

export default Component;
