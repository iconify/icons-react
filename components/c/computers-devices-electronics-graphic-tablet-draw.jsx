import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp4xf36ii.css';
import '../../css/y/yp70zv-ps.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp4xf36ii"/><path class="yp70zv-ps"/>`,
		"fallback": "streamline-pixel:computers-devices-electronics-graphic-tablet-draw",
	});
}

export default Component;
