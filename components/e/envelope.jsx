import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij3qcmvxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ij3qcmvxh"/>`,
		"fallback": "uil:envelope",
	});
}

export default Component;
