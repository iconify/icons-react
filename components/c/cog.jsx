import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uv5x0xbsw.css';
import '../../css/o/o76y7sddq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uv5x0xbsw"/><path class="o76y7sddq"/></g>`,
		"fallback": "streamline-color:cog",
	});
}

export default Component;
