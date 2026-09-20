import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-83soh2y.css';
import '../../css/x/xjfc-xbtr.css';
import '../../css/u/uhbwx8rzo.css';
import '../../css/d/d6gzovbhs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x-83soh2y"/><path class="xjfc-xbtr"/><path class="uhbwx8rzo"/><path class="d6gzovbhs"/></g>`,
		"fallback": "streamline-color:dark-dislay-mode",
	});
}

export default Component;
