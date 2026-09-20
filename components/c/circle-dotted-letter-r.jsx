import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eels3fblz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eels3fblz"/>`,
		"fallback": "tabler:circle-dotted-letter-r",
	});
}

export default Component;
