import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se_9qubxy.css';

const viewBox = {"width":180,"height":180};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se_9qubxy"/>`,
		"fallback": "thesvg-color:earmark-dark",
	});
}

export default Component;
