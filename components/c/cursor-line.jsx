import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgi8dbc0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgi8dbc0s"/>`,
		"fallback": "ri:cursor-line",
	});
}

export default Component;
