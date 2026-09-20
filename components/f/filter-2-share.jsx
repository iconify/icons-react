import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbnreyb6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbnreyb6m"/>`,
		"fallback": "tabler:filter-2-share",
	});
}

export default Component;
