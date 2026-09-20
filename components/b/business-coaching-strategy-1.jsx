import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/ab-2i5bvk.css';
import '../../css/r/rh8_bp6fq.css';
import '../../css/z/zdl4vfpnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ab-2i5bvk"/><path class="rh8_bp6fq"/><path class="zdl4vfpnm"/></g>`,
		"fallback": "streamline-freehand-color:business-coaching-strategy-1",
	});
}

export default Component;
