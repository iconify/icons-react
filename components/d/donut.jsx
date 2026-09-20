import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/yk5i701wb.css';
import '../../css/p/ptkmnzomc.css';
import '../../css/b/brx-gnbny.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="yk5i701wb"/><path class="ptkmnzomc"/><path class="brx-gnbny"/></g>`,
		"fallback": "streamline:donut",
	});
}

export default Component;
