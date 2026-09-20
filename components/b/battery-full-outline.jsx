import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sxrostbfo.css';
import '../../css/z/zaofyzbua.css';
import '../../css/o/o59_txsws.css';
import '../../css/l/li5vjfsfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sxrostbfo"/><path class="zaofyzbua"/><path class="o59_txsws"/><path clip-rule="evenodd" class="li5vjfsfl"/></g>`,
		"fallback": "solar:battery-full-outline",
	});
}

export default Component;
