import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvd61yb8z.css';
import '../../css/f/fd4laftzm.css';
import '../../css/i/iic6-gxyp.css';
import '../../css/w/wzw7k-iny.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yvd61yb8z"/><path class="fd4laftzm"/><path class="iic6-gxyp"/><path class="wzw7k-iny"/></g>`,
		"fallback": "streamline-flex-color:dark-dislay-mode",
	});
}

export default Component;
