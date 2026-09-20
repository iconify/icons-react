import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ccjdm598r.css';
import '../../css/d/dzzk7vkop.css';
import '../../css/m/mhr7ub-3v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ccjdm598r"/><path class="dzzk7vkop"/><path class="mhr7ub-3v"/></g>`,
		"fallback": "streamline-color:good-health-and-well-being",
	});
}

export default Component;
