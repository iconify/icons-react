import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjph59xfl.css';
import '../../css/p/pg557kbil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjph59xfl"/><path class="pg557kbil"/>`,
		"fallback": "pixel:face-thinking-solid",
	});
}

export default Component;
