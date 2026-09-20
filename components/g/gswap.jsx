import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfp-e_b9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfp-e_b9l"/>`,
		"fallback": "token:gswap",
	});
}

export default Component;
