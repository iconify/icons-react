import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r42rcsbfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r42rcsbfo"/>`,
		"fallback": "tabler:hexagon-number-3-filled",
	});
}

export default Component;
