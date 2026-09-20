import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_w07d5xn.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_w07d5xn"/>`,
		"fallback": "lineicons:chef-hat",
	});
}

export default Component;
