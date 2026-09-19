import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm30bdpol.css';
import '../../css/t/tvbix7bxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm30bdpol"/><path class="tvbix7bxx"/>`,
		"fallback": "boxicons:arrow-in-down-right-stroke-circle-filled",
	});
}

export default Component;
