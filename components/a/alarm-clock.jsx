import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s96csflxf.css';
import '../../css/x/xj5_tsbpm.css';
import '../../css/l/ltrau768o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s96csflxf"/><path class="xj5_tsbpm"/><path class="ltrau768o"/></g>`,
		"fallback": "streamline-color:alarm-clock",
	});
}

export default Component;
