import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtbfoc8_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtbfoc8_i"/>`,
		"fallback": "withicons:baguette-gloss",
	});
}

export default Component;
