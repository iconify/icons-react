import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-bshlbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-bshlbmr"/>`,
		"fallback": "hugeicons:coordinate-01",
	});
}

export default Component;
