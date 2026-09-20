import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hc4de9b6x.css';
import '../../css/x/xdcu1e3tm.css';
import '../../css/p/pro7mk2do.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hc4de9b6x"/><path class="xdcu1e3tm"/><path class="pro7mk2do"/></g>`,
		"fallback": "streamline-color:cyborg",
	});
}

export default Component;
