import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crfaxib9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crfaxib9l"/>`,
		"fallback": "streamline-freehand:color-crayon",
	});
}

export default Component;
