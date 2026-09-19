import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnndvsa8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnndvsa8u"/>`,
		"fallback": "cbi:duco-2",
	});
}

export default Component;
