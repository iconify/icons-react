import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko6hr-8xd.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko6hr-8xd"/>`,
		"fallback": "fluent-mdl2:contact-link",
	});
}

export default Component;
