import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkhft_g-v.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkhft_g-v"/>`,
		"fallback": "lineicons:flag",
	});
}

export default Component;
