import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tevvgsbpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tevvgsbpd"/>`,
		"fallback": "noviair:frying-pan-clock",
	});
}

export default Component;
