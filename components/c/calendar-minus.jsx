import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs8i7or4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rs8i7or4j"/>`,
		"fallback": "pixelarticons:calendar-minus",
	});
}

export default Component;
