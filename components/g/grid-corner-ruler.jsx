import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p18lntbms.css';
import '../../css/z/zqgxlpbyx.css';
import '../../css/i/i73p8iv3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="p18lntbms"/><path class="zqgxlpbyx"/><path class="i73p8iv3c"/></g>`,
		"fallback": "streamline-freehand-color:grid-corner-ruler",
	});
}

export default Component;
