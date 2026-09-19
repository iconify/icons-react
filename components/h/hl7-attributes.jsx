import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwjzqebfb.css';
import '../../css/e/e4snvjyzq.css';
import '../../css/o/oh_sxl0hj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwjzqebfb"/><path class="e4snvjyzq"/><path class="oh_sxl0hj"/>`,
		"fallback": "carbon:hl7-attributes",
	});
}

export default Component;
