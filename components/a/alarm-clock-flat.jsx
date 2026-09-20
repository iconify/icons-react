import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tr9wzob5i.css';
import '../../css/d/daokibqgs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tr9wzob5i"/><path clip-rule="evenodd" class="daokibqgs"/></g>`,
		"fallback": "streamline-color:alarm-clock-flat",
	});
}

export default Component;
