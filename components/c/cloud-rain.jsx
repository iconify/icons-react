import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii82hnrhg.css';
import '../../css/l/lzpmdx6fy.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii82hnrhg"/><path class="lzpmdx6fy"/>`,
		"fallback": "lineicons:cloud-rain",
	});
}

export default Component;
