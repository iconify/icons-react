import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zyf0zn9wu.css';
import '../../css/s/s2wbsnbyq.css';
import '../../css/w/wplmxac-n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zyf0zn9wu"/><path class="s2wbsnbyq"/><path class="wplmxac-n"/></g>`,
		"fallback": "streamline-flex-color:heart-rate",
	});
}

export default Component;
