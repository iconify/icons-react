import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klaz9acmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klaz9acmk"/>`,
		"fallback": "solar:check-linear",
	});
}

export default Component;
