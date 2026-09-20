import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qxz87rb8d.css';
import '../../css/l/lv8s3qbpf.css';
import '../../css/v/vfkdrvbaz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qxz87rb8d"/><path class="lv8s3qbpf"/><path class="vfkdrvbaz"/></g>`,
		"fallback": "streamline-color:crop-selection",
	});
}

export default Component;
