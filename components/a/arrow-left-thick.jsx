import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg8ti8thn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qg8ti8thn"/>`,
		"fallback": "typcn:arrow-left-thick",
	});
}

export default Component;
