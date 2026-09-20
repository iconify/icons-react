import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko7wmu2ns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko7wmu2ns"/>`,
		"fallback": "uim:align-center-justify",
	});
}

export default Component;
