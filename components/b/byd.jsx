import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0n41_jvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0n41_jvu"/>`,
		"fallback": "cbi:byd",
	});
}

export default Component;
