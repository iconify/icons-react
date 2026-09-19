import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_1hf_bfc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_1hf_bfc"/>`,
		"fallback": "cryptocurrency:equa",
	});
}

export default Component;
