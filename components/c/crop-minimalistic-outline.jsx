import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wygv-re1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wygv-re1g"/>`,
		"fallback": "solar:crop-minimalistic-outline",
	});
}

export default Component;
