import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u593zgbza.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u593zgbza"/>`,
		"fallback": "icon-park-outline:airplane",
	});
}

export default Component;
