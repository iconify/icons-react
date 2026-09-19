import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3xs06bzl.css';
import '../../css/b/b1v-7vnuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3xs06bzl"/><path class="b1v-7vnuv"/>`,
		"fallback": "bx:bxs-buildings",
	});
}

export default Component;
