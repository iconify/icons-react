import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/se5m48bap.css';
import '../../css/t/tpjg30w-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="se5m48bap"/><path class="tpjg30w-t"/></g>`,
		"fallback": "withicons:drag-handle-engrave",
	});
}

export default Component;
