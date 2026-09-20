import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ytgneqs9m.css';
import '../../css/x/xrdyz9_oo.css';
import '../../css/r/r-x9jqika.css';
import '../../css/t/tjs941cnk.css';
import '../../css/z/zv89d8kxa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ytgneqs9m"/><path class="xrdyz9_oo"/><path class="r-x9jqika"/><path class="tjs941cnk"/><path class="zv89d8kxa"/></g>`,
		"fallback": "streamline-color:capitol",
	});
}

export default Component;
