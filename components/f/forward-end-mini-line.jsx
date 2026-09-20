import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlszn25vu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlszn25vu"/>`,
		"fallback": "ri:forward-end-mini-line",
	});
}

export default Component;
