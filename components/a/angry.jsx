import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsqcoxl2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsqcoxl2x"/>`,
		"fallback": "pixelarticons:angry",
	});
}

export default Component;
