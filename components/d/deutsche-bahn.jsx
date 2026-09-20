import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h14zq1epl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h14zq1epl"/>`,
		"fallback": "thesvg:deutsche-bahn",
	});
}

export default Component;
