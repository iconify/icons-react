import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sihs_b4zx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sihs_b4zx"/>`,
		"fallback": "coolicons:coins-round",
	});
}

export default Component;
