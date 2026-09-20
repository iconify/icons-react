import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_8fc5nqz.css';
import '../../css/z/zp1q72bti.css';
import '../../css/n/nvs_mocnt.css';
import '../../css/v/vdwwz320h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i_8fc5nqz"/><path class="zp1q72bti"/><path class="nvs_mocnt"/><path class="vdwwz320h"/></g>`,
		"fallback": "streamline-color:credit-card-2",
	});
}

export default Component;
