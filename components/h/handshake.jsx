import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1hic9yix.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1hic9yix"/>`,
		"fallback": "lineicons:handshake",
	});
}

export default Component;
