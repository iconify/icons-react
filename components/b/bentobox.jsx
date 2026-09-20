import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbqqu2bej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbqqu2bej"/>`,
		"fallback": "thesvg:bentobox",
	});
}

export default Component;
