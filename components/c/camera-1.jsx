import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yxe7qoajj.css';
import '../../css/y/yqu3ehqmd.css';
import '../../css/i/i0axfsbgs.css';
import '../../css/t/tjcqu8l6p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yxe7qoajj"/><path clip-rule="evenodd" class="yqu3ehqmd"/><path class="i0axfsbgs"/><path class="tjcqu8l6p"/></g>`,
		"fallback": "streamline-color:camera-1",
	});
}

export default Component;
