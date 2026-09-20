import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/h/hrfl-ybnc.css';
import '../../css/n/nim0qybvr.css';
import '../../css/o/oa8_36spi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="hrfl-ybnc"/><path class="nim0qybvr"/><path class="oa8_36spi"/></g>`,
		"fallback": "streamline:browser-lock",
	});
}

export default Component;
