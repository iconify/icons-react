import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uchsqubpf.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uchsqubpf"/>`,
		"fallback": "lineicons:code-1",
	});
}

export default Component;
