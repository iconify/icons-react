import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxjr2k8yj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxjr2k8yj"/>`,
		"fallback": "raphael:imac",
	});
}

export default Component;
