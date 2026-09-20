import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9e-6i4ua.css';
import '../../css/r/ry96p-bxj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9e-6i4ua"/><path class="ry96p-bxj"/>`,
		"fallback": "streamline-pixel:ecology-clean-car-cable-charge",
	});
}

export default Component;
