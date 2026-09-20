import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hwq-wdobf.css';
import '../../css/u/uv4dz2bne.css';
import '../../css/t/t7wdpeb1d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hwq-wdobf"/><path class="uv4dz2bne"/><path class="t7wdpeb1d"/></g>`,
		"fallback": "streamline-flex-color:end-point-diamond",
	});
}

export default Component;
