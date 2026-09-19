import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx2hn-xxl.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx2hn-xxl"/>`,
		"fallback": "fluent-mdl2:align-horizontal-right",
	});
}

export default Component;
