import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgq8g5bls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgq8g5bls"/>`,
		"fallback": "ri:delete-back-2-fill",
	});
}

export default Component;
