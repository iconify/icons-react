import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsh2l2blz.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsh2l2blz"/>`,
		"fallback": "fluent-mdl2:hide",
	});
}

export default Component;
