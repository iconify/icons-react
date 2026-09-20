import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b92kr_blc.css';
import '../../css/p/pcfv2t7ix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b92kr_blc"/><path class="pcfv2t7ix"/></g>`,
		"fallback": "streamline-freehand-color:data-transfer-edi-reload",
	});
}

export default Component;
