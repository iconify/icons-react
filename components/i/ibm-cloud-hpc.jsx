import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7ncarbqz.css';
import '../../css/x/xm09adb0q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7ncarbqz"/><path class="xm09adb0q"/>`,
		"fallback": "carbon:ibm-cloud-hpc",
	});
}

export default Component;
