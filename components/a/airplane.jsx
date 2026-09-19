import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nghcs4vdj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nghcs4vdj"/>`,
		"fallback": "icomoon-free:airplane",
	});
}

export default Component;
