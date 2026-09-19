import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kznva-0mg.css';
import '../../css/g/gvmh5mbbf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kznva-0mg"/><path class="gvmh5mbbf"/>`,
		"fallback": "carbon:forecast-lightning-30",
	});
}

export default Component;
