import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5sjv_b5u.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5sjv_b5u"/>`,
		"fallback": "fluent-mdl2:double-down-arrow",
	});
}

export default Component;
