import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn2gtrrvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xn2gtrrvh"/>`,
		"fallback": "solar:floor-lamp-minimalistic-outline",
	});
}

export default Component;
