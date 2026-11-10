import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/scd6web9s.css';
import '../../css/y/yon5glqlr.css';
import '../../css/w/wnjg72bgx.css';
import '../../css/n/nfkzo2tfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="scd6web9s"/><path class="yon5glqlr"/><path class="wnjg72bgx"/><path class="nfkzo2tfy"/></g>`,
		"fallback": "andrsrxn:file-lock",
	});
}

export default Component;
