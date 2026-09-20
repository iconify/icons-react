import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjef-pb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjef-pb3l"/>`,
		"fallback": "reicon:aspect-ratio-square-filled",
	});
}

export default Component;
