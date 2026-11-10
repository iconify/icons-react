import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c48iep45y.css';
import '../../css/r/rymip6wen.css';
import '../../css/z/zapwtgb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c48iep45y"/><path class="rymip6wen"/><path class="zapwtgb_o"/></g>`,
		"fallback": "andrsrxn:image-text",
	});
}

export default Component;
