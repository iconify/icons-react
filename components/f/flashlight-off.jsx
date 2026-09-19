import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekry0bbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekry0bbzo"/>`,
		"fallback": "hugeicons:flashlight-off",
	});
}

export default Component;
