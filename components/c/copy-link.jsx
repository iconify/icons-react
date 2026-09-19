import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0_aafh7s.css';
import '../../css/o/oasg37s7n.css';
import '../../css/k/kfsga1-1n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0_aafh7s"/><path class="oasg37s7n"/><path class="kfsga1-1n"/>`,
		"fallback": "carbon:copy-link",
	});
}

export default Component;
