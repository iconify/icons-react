import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0id_ybqh.css';
import '../../css/t/t6wfis5pu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0id_ybqh"/><path class="t6wfis5pu"/>`,
		"fallback": "streamline-pixel:design-color-bucket-brush",
	});
}

export default Component;
