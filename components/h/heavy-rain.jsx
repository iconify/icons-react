import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzgfo0ilr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzgfo0ilr"/>`,
		"fallback": "icon-park-outline:heavy-rain",
	});
}

export default Component;
