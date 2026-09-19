import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we-lhfbwe.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we-lhfbwe"/>`,
		"fallback": "fluent-mdl2:chevron-down-end-6",
	});
}

export default Component;
