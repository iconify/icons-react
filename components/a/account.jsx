import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-f1gczsv.css';
import '../../css/t/toa-48bpx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-f1gczsv"/><path class="toa-48bpx"/>`,
		"fallback": "carbon:account",
	});
}

export default Component;
