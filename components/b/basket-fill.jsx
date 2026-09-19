import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcp-q-fmk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcp-q-fmk"/>`,
		"fallback": "bi:basket-fill",
	});
}

export default Component;
