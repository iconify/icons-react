import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zywfy28wn.css';
import '../../css/e/ejl1xmbrr.css';
import '../../css/p/pu8n9f6lr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zywfy28wn"/><path class="ejl1xmbrr"/><path class="pu8n9f6lr"/></g>`,
		"fallback": "streamline-ultimate-color:barcode",
	});
}

export default Component;
