import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g7ipb_btk.css';
import '../../css/h/hl_uf_bcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g7ipb_btk"/><path class="hl_uf_bcw"/></g>`,
		"fallback": "streamline-freehand:business-cash-eye",
	});
}

export default Component;
