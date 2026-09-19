import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4sbvbb3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4sbvbb3s"/>`,
		"fallback": "ci:double-quotes-r",
	});
}

export default Component;
