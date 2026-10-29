import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/k0slrxj9a.css';
import '../../css/m/mxc1ddbwf.css';
import '../../css/c/coff_0a1c.css';
import '../../css/p/p568vbblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="k0slrxj9a wm-k"/><path class="mxc1ddbwf wm-shadow"/><path class="coff_0a1c wm-k"/><path class="p568vbblp wm-a"/></g>`,
		"fallback": "withicons:address-book-engrave",
	});
}

export default Component;
