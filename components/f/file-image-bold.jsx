import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/z/zg-qcwipg.css';
import '../../css/i/i9fwbbbss.css';
import '../../css/q/qx0vdibrb.css';
import '../../css/u/ut9obfbsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="zg-qcwipg"/><path class="i9fwbbbss"/><path class="qx0vdibrb"/><path class="ut9obfbsz"/></g>`,
		"fallback": "iconamoon:file-image-bold",
	});
}

export default Component;
