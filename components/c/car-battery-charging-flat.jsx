import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rbfesfb-f.css';
import '../../css/s/s58xh1bug.css';
import '../../css/h/hxatvrbps.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rbfesfb-f"/><path class="s58xh1bug"/><path clip-rule="evenodd" class="hxatvrbps"/></g>`,
		"fallback": "streamline-color:car-battery-charging-flat",
	});
}

export default Component;
