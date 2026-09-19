import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e39ud6bwf.css';
import '../../css/r/rhygotbxm.css';
import '../../css/d/d_xxxv6_c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="e39ud6bwf"/><path class="rhygotbxm"/><path class="d_xxxv6_c"/>`,
		"fallback": "carbon:cube-view",
	});
}

export default Component;
