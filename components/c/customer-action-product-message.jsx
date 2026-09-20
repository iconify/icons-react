import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mfxfcw0qv.css';
import '../../css/b/b0t9sccol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mfxfcw0qv"/><path class="b0t9sccol"/></g>`,
		"fallback": "streamline-freehand:customer-action-product-message",
	});
}

export default Component;
