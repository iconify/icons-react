import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptz7ttbgp.css';
import '../../css/d/dlkylf--k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptz7ttbgp"/><path class="dlkylf--k"/>`,
		"fallback": "carbon:ibm-lqe",
	});
}

export default Component;
